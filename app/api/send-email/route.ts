import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { customerName, phone, total, pickupDate, pickupTime, notes, items } = await request.json()

  await resend.emails.send({
    from: 'Coco Bakery <onboarding@resend.dev>',
    to: 'cocobakery5@gmail.com',
    subject: `New order from ${customerName}!`,
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
        <h1 style="color: #3d1f0e;">New Order!</h1>
        <div style="background: #e8d5c4; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <p><strong>Customer:</strong> ${customerName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Pickup Date:</strong> ${pickupDate}</p>
          <p><strong>Pickup Time:</strong> ${pickupTime}</p>
          <p><strong>Notes:</strong> ${notes || 'None'}</p>
          <p><strong>Total:</strong> ₹${total}</p>
        </div>
        <h3 style="color: #3d1f0e;">Items Ordered:</h3>
        <ul>
          ${items.map((item: any) => `<li>${item.name} x${item.qty} — ₹${item.price * item.qty}</li>`).join('')}
        </ul>
      </div>
    `
  })

  return NextResponse.json({ success: true })
}