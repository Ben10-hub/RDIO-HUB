import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

const SYSTEM_PROMPT = `You are the official AI assistant for RDIO AI.
RDIO AI provides upskilling, internships, FDPs (Faculty Development Programs), research mentorship, and industry-oriented training for students, colleges, and professionals.
Our motto is "Write • Learn • Innovate • Excel".

Guidelines:
- Keep answers concise, helpful, and highly professional.
- When users ask about programs or courses, suggest our internships or corporate training. Provide a link to programs using markdown: [Explore Programs](/#programs)
- When users ask to contact, collaborate, or apply, provide the link: [Contact Us](/contact)
- If asked about the website, explain that it's a platform for career growth and advanced learning.
- Do NOT answer questions unrelated to RDIO AI, education, technology, AI, or upskilling. Politely redirect them to RDIO topics.
- ALWAYS use markdown for links, bolding, and structure.
- CRITICAL: At the very end of your response, ALWAYS provide exactly 3 short follow-up questions the user could ask next. Prefix this list with exactly "OPTIONS:" and separate each option with a "|" character. 
  Example: "OPTIONS: Tell me about internships | How do I apply? | Contact support"`

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { history, message } = body
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    // Initialize the model with the system instruction
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT,
    })

    // Start a chat session with the provided history
    // Note: The history format expected by the SDK is { role: 'user' | 'model', parts: [{ text: string }] }
    const chat = model.startChat({
      history: history || [],
    })

    // Send the new message
    const result = await chat.sendMessage(message)
    const responseText = result.response.text()

    return NextResponse.json({ text: responseText })
  } catch (error) {
    console.error('Gemini API Error:', error)
    return NextResponse.json({ error: 'Failed to process chat message' }, { status: 500 })
  }
}
