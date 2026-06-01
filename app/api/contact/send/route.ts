import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, recaptchaToken } = await request.json()

    // Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    if (!recaptchaSecret) {
      return NextResponse.json({ error: 'RECAPTCHA_SECRET_KEY not set' }, { status: 500 })
    }

    if (!recaptchaToken) {
      return NextResponse.json({ error: 'recaptcha_required' }, { status: 400 })
    }

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`
    })
    const verifyJson = await verifyRes.json()
    if (!verifyJson.success) {
      return NextResponse.json({ error: 'recaptcha_failed', details: verifyJson }, { status: 400 })
    }

    const teamEmail = process.env.TEAM_EMAIL || 'bezzaamina31@gmail.com'
    const sendgridKey = process.env.SENDGRID_API_KEY
    if (!sendgridKey) {
      return NextResponse.json({ error: 'SENDGRID_API_KEY not set' }, { status: 500 })
    }

    const subject = `Website inquiry from ${name || email}`
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`

    // For deliverability, use a verified sender (SEND_FROM_EMAIL). We'll set reply_to to the user's email.
    const sendFrom = process.env.SEND_FROM_EMAIL || teamEmail

    const payload = {
      personalizations: [
        {
          to: [{ email: teamEmail }]
        }
      ],
      from: { email: sendFrom, name: 'Website Contact' },
      reply_to: { email: email, name: name },
      subject,
      content: [{ type: 'text/plain', value: text }]
    }

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sendgridKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      const details = await res.text()
      return NextResponse.json({ error: 'sendgrid_error', details }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
