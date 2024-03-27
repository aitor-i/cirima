import EmailTemplate from '@/components/EmailTemplate/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(req: NextRequest) {
  // Perform your logic here
  const body = await req.json();

  const { name, surname, email, message } = body

  const { data, error } = await resend.emails.send({
    from: 'Contact <contact@steel-mountain.dev>',
    to: ['contact@aitoribarra.com'],
    subject: `${name} - Ha enviado un mensaje atraves de la web!`,
    react: EmailTemplate({ name, message, surname, email }),
  });

  const response = { message: "Message saved!", body };

  console.log(data, error)
  return new NextResponse(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
