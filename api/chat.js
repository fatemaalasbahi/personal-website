import { google } from '@ai-sdk/google'
import { generateText } from 'ai'
import { buildSystemPrompt } from '../lib/systemPrompt.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { message } = req.body ?? {}

  if (!message || typeof message !== 'string' || !message.trim()) {
    res.status(400).json({ error: 'Message is required' })
    return
  }

  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    res.status(500).json({ error: 'Missing GOOGLE_GENERATIVE_AI_API_KEY' })
    return
  }

  try {
    const { text } = await generateText({
      model: google('gemini-3.5-flash'),
      system: buildSystemPrompt(),
      prompt: message.trim(),
    })

    res.status(200).json({ reply: text })
  } catch (error) {
    console.error('Chat API error:', error)
    res.status(500).json({ error: 'Failed to generate a reply' })
  }
}
