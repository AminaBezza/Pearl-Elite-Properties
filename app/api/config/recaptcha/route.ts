import { NextResponse } from 'next/server'

export async function GET() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || null
  return NextResponse.json({ siteKey })
}
