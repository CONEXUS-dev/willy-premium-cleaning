import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('TEST API route called');
    
    const body = await request.json();
    console.log('TEST Request body:', body);
    
    // Simple test response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Test API route working!',
        received: body
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('TEST API error:', error);
    return NextResponse.json(
      { error: 'Test API failed: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

// Also handle GET for testing
export async function GET() {
  console.log('TEST API route GET called');
  
  return NextResponse.json(
    { 
      message: 'Test API route is working! POST to test email sending.',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}
