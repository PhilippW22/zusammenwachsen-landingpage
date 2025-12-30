import { NextRequest, NextResponse } from 'next/server';

const validEvents = [
  'card_opened',
  'card_saved',
  'popup_shown',
  'donation_banner_shown',
  'donation_button_clicked',
] as const;

type EventType = typeof validEvents[number];

interface TrackRequest {
  event_type: EventType;
  question_id?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as TrackRequest;
    const { event_type, question_id } = body;

    // Event validieren
    if (!validEvents.includes(event_type)) {
      return NextResponse.json(
        { error: 'Invalid event_type' },
        { status: 400 }
      );
    }

    // Question ID validieren (wenn erforderlich)
    if (
      ['card_opened', 'card_saved'].includes(event_type) &&
      (!question_id || !/^q[0-9a-zA-Z]{1,10}$/.test(question_id))
    ) {
      return NextResponse.json(
        { error: 'Invalid or missing question_id' },
        { status: 400 }
      );
    }

    // Question ID darf bei diesen Events nicht vorhanden sein
    if (
      ['popup_shown', 'donation_banner_shown', 'donation_button_clicked'].includes(event_type) &&
      question_id !== undefined
    ) {
      return NextResponse.json(
        { error: 'question_id should be omitted for this event_type' },
        { status: 400 }
      );
    }

    // Supabase Request
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/analytics_events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({
        event_type,
        ...(question_id && { question_id }),
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Supabase error:', text);
      throw new Error(`Supabase error: ${text}`);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Alle anderen HTTP-Methoden blockieren
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}