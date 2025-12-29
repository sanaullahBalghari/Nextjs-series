import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'API key not configured' },
        { status: 500 }
      );
    }

    const prompt = `Generate exactly 3 short, friendly, and engaging questions for an anonymous messaging app.

Requirements:
- Each question should be open-ended and fun
- Keep questions light and positive
- No personal or sensitive topics
- Return as simple text, one question per line
- No numbering or bullets

Example:
What's something that made you smile today?
If you could have dinner with anyone, who would it be?
What's your favorite way to spend a weekend?

Generate 3 new unique questions:`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 1000, // ✅ Increased from 200 to 1000
            topP: 0.95,
            topK: 40,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to generate suggestions',
          details: errorData,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Extract text from response
    const text = data.candidates[0]?.content?.parts[0]?.text || '';

    // Split by newlines and clean up
    const questions = text
      .split('\n')
      .map((q: string) => q.trim())
      .filter((q: string) => q.length > 0 && !q.match(/^\d+[\.\)]/));

    return NextResponse.json({
      success: true,
      suggestions: questions.slice(0, 3),
      raw: text, // For debugging
    });
  } catch (error) {
    console.error('Error in suggest-messages API:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate suggestions',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}