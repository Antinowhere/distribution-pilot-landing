import Replicate from "replicate";

export const maxDuration = 300;

const replicate = new Replicate();

const POLL_INTERVAL = 2000;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;
    const refText = formData.get("refText") as string;
    const text = formData.get("text") as string;

    if (!audioFile || !text) {
      return Response.json({ error: "Missing audio or text" }, { status: 400 });
    }

    const buffer = Buffer.from(await audioFile.arrayBuffer());
    const dataUri = `data:${audioFile.type || "audio/webm"};base64,${buffer.toString("base64")}`;

    const t0 = Date.now();
    console.log(`[speak] starting TTS (async), audio=${buffer.length}b, text="${text.slice(0, 60)}..."`);

    // Create prediction async (bypasses broken sync/Prefer:wait path)
    const prediction = await replicate.predictions.create({
      model: "qwen/qwen3-tts",
      input: {
        mode: "voice_clone",
        text,
        reference_audio: dataUri,
        reference_text: refText || "",
        language: "auto",
      },
    });

    console.log(`[speak] prediction created: ${prediction.id}, status: ${prediction.status}`);

    // Poll until done
    let result = prediction;
    while (result.status !== "succeeded" && result.status !== "failed" && result.status !== "canceled") {
      await new Promise((r) => setTimeout(r, POLL_INTERVAL));
      result = await replicate.predictions.get(prediction.id);
      console.log(`[speak] poll: ${result.status} (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    }

    if (result.status !== "succeeded") {
      throw new Error(result.error?.toString() || `Prediction ${result.status}`);
    }

    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    console.log(`[speak] TTS done in ${elapsed}s, output: ${result.output}`);

    const audioUrl = typeof result.output === "string" ? result.output : String(result.output);

    return Response.json({ audioUrl });
  } catch (err) {
    console.error("[speak] error:", err);
    return Response.json(
      { error: err instanceof Error ? err.message : "Voice generation failed" },
      { status: 500 }
    );
  }
}
