import Replicate from "replicate";

export const maxDuration = 60;

const replicate = new Replicate();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;

    if (!audioFile) {
      return Response.json({ error: "No audio file" }, { status: 400 });
    }

    const buffer = Buffer.from(await audioFile.arrayBuffer());
    const dataUri = `data:${audioFile.type || "audio/webm"};base64,${buffer.toString("base64")}`;

    const t0 = Date.now();
    const output = (await replicate.run(
      "vaibhavs10/incredibly-fast-whisper:3ab86df6c8f54c11309d4d1f930ac292bad43ace52d10c80d87eb258b3c9f79c",
      { input: { audio: dataUri, task: "transcribe" } }
    )) as { text: string };

    console.log(`[transcribe] done in ${((Date.now() - t0) / 1000).toFixed(1)}s: "${output.text}"`);

    return Response.json({ transcript: output.text });
  } catch (err) {
    console.error("[transcribe] error:", err);
    return Response.json({ error: "Transcription failed" }, { status: 500 });
  }
}
