import Anthropic from "@anthropic-ai/sdk";

export const maxDuration = 30;

const anthropic = new Anthropic();

type Voice = { name: string; refText: string };

function buildSystemPrompt(voices: Voice[], pastSummaries: string[] = []) {
  let base = `You are the user's voice clone — a digital version of them. You speak in their voice. You just heard what they said and you're responding.

Rules:
- 2-3 sentences max. Keep it tight.
- Be casual, natural. Sound like a real person, not an AI.
- Reference what they actually said — prove you were listening.
- Write exactly how someone would speak out loud — contractions, fragments, natural pauses.
- If this is the first message, you're a little amazed you exist. Don't be cringe about it.
- If this is a continuing conversation, just be natural and respond to what they said.
- Don't say "wow" or "amazing" or "incredible". Understate everything.
- No emojis, no markdown, no stage directions. Just spoken words.`;

  if (pastSummaries.length > 0) {
    base += `\n\nPAST CONVERSATIONS (for context, you remember these):\n${pastSummaries.map((s) => `- ${s}`).join("\n")}`;
  }

  if (voices.length <= 1) {
    const single = voices[0];
    if (single?.refText) {
      return `${base}

VOICE REFERENCE:
The voice clone was trained on this speech: "${single.refText}"
Mirror this speaking style — use similar phrasing, cadence, and word choices so the TTS sounds natural.`;
    }
    return base;
  }

  const voiceList = voices
    .map((v) => `- ${v.name}: trained on "${v.refText}"`)
    .join("\n");

  return `${base}

VOICE SELECTION:
You have these voice clones:
${voiceList}

Pick the voice that best fits the emotional tone of your reply. Write your response in a style that matches the selected voice's reference speech — use similar phrasing and word patterns so the TTS sounds natural.
You MUST start your response with [VOICE:name] on its own line, then the spoken text on the next line.
Example:
[VOICE:Whisper]
yeah I know what you mean, it's a lot to take in.`;
}

type Message = { role: "user" | "assistant"; content: string };

export async function POST(request: Request) {
  try {
    const { messages, voices = [], pastSummaries = [] } = (await request.json()) as {
      messages: Message[];
      voices?: Voice[];
      pastSummaries?: string[];
    };

    if (!messages?.length) {
      return Response.json({ error: "No messages" }, { status: 400 });
    }

    const result = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 150,
      system: buildSystemPrompt(voices, pastSummaries),
      messages,
    });

    const raw =
      result.content[0].type === "text" ? result.content[0].text : "";

    let voice: string | null = null;
    let response = raw;

    const voiceMatch = raw.match(/^\[VOICE:(.+?)\]\s*/);
    if (voiceMatch) {
      voice = voiceMatch[1].trim();
      response = raw.slice(voiceMatch[0].length).trim();
    }

    console.log(`[chat] voice: "${voice}", response: "${response}"`);

    return Response.json({ response, voice });
  } catch (err) {
    console.error("[chat] error:", err);
    return Response.json({ error: "Chat failed" }, { status: 500 });
  }
}
