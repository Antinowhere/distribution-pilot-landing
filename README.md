# Distribution Pilot

Talk for a few seconds and meet your clone.

## Stack

- **Frontend:** Next.js + Tailwind CSS
- **LLM:** Anthropic Claude (conversation brain + voice selection)
- **TTS:** Qwen3-TTS via Replicate (voice cloning)
- **STT:** Browser Web Speech API (zero-cost, instant transcription)

## How It Works

1. Record a short clip reading a prompt sentence
2. Name your voice (e.g. "Angry", "Whisper", "French")
3. Your clone responds in your voice
4. Keep talking — back-and-forth conversation loop
5. Record more voices anytime — Claude auto-selects the best voice for each reply based on emotional tone

## Voice Auto-Selection

When multiple voices exist, Claude sees each voice's name and the reference text it was trained on. It picks the most appropriate voice for its reply and writes in a style that phonetically matches that voice's reference speech — improving TTS output quality.

## Voice Cloning Notes (from testing)

- **French accent was the best result** — clear articulation of how it sounds + the LLM produced text that made it easy for the TTS to pronounce (e.g. "I sink zat it eez very nice"). Key insight: if the reference audio clearly demonstrates how the voice sounds AND the generated text phonetically matches, quality goes up.
- **Angry voice** works well when speaking angry lines but falls apart on neutral content. The model locks into the emotional register of the reference audio.
- **Whisper voice** is great but breaks past ~6 seconds — the whisper turns into a regular voice. Keep whisper references short.
- **Announcer voice** (big elongated vowels like "GOOOOOAL") surprisingly respects the training audio well. But the TTS struggles with elongated consonant-adjacent vowels like "MAAAASIVE" — it'll mispronounce a letter. Getting long vowels without pronunciation errors is an open problem.
- **Voice consistency is critical.** Any variation within the reference clip and the model craps out. This is a major UX challenge because real users will naturally fluctuate their voice during recording.

## Roadmap

### In Progress
- [ ] Supabase auth (magic link)
- [ ] Persist voices + conversations to Supabase (Storage for audio, Postgres for metadata)
- [ ] Conversation summaries (LLM-generated after each call, dated, shown in sidebar)
- [ ] All past summaries injected into system prompt for continuity

### Next Up
- [ ] Guided onboarding: 3 voice cards (Calm, Angry, Encouraging) with example playback, record, verify, retry/continue
- [ ] Goals selection screen (preset common goals + custom input) — saved to user profile, injected into system prompt
- [ ] LLM opens each call by checking in on goals
- [ ] Past conversation sidebar (click to load full history)
- [ ] IndexedDB fallback for offline voice caching

### Future
- [ ] Swap Replicate TTS for ElevenLabs (streaming, better latency, ~30 min migration on the API side)
- [ ] Real-time streaming audio (first packet <300ms)
- [ ] Progressive voice quality (short sample → longer professional recording)

## Setup

```bash
npm install
cp .env.local.example .env
# Add your REPLICATE_API_TOKEN and ANTHROPIC_API_KEY
npm run dev
```
