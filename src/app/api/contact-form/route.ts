import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(req: NextRequest) {
  // Perform your logic here
  const body = await req.json();

  console.log('Body: ', body)
  const response = { message: "Message saved!", body };
  return new NextResponse(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
