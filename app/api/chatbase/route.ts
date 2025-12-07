import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages, stream = false } = await request.json();

    const response = await fetch('https://www.chatbase.co/api/v1/chat', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 7704297d-9532-4030-897e-ebf571f9f316',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages,
        chatbotId: 'blWn0Ze_4p-kS6ibfiQWC',
        stream,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Chatbase API error:', error);
      return NextResponse.json(
        { error: 'Failed to get response from chatbot' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error in chatbase API:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error.message },
      { status: 500 }
    );
  }
}
