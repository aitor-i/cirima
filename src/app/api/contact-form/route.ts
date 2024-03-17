import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic' // defaults to auto

export function POST(req: NextRequest) {
  // Perform your logic here
  const response = { message: 'Hello, World!' };
  return new NextResponse(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
