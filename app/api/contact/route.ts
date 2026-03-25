import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Set RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send notification email to YOU
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['contact.aryan0101@gmail.com'],
      subject: `🚀 New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a; color: #e2e8f0; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #06b6d4; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            <div style="height: 4px; width: 60px; background: linear-gradient(to right, #06b6d4, #a855f7); margin: 15px auto; border-radius: 2px;"></div>
          </div>
          
          <div style="background-color: #1e293b; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #06b6d4; margin-top: 0; font-size: 18px; border-bottom: 2px solid #334155; padding-bottom: 10px;">Contact Information</h2>
            
            <div style="margin: 15px 0;">
              <p style="margin: 8px 0; color: #cbd5e1;">
                <strong style="color: #06b6d4;">Name:</strong> ${name}
              </p>
              <p style="margin: 8px 0; color: #cbd5e1;">
                <strong style="color: #06b6d4;">Email:</strong> 
                <a href="mailto:${email}" style="color: #22d3ee; text-decoration: none;">${email}</a>
              </p>
              <p style="margin: 8px 0; color: #cbd5e1;">
                <strong style="color: #06b6d4;">Project Type:</strong> ${subject}
              </p>
            </div>
          </div>
          
          <div style="background-color: #1e293b; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #a855f7; margin-top: 0; font-size: 18px; border-bottom: 2px solid #334155; padding-bottom: 10px;">Message:</h3>
            <p style="color: #cbd5e1; line-height: 1.6; margin: 15px 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #334155;">
            <p style="color: #64748b; font-size: 12px; margin: 5px 0;">
              📧 Sent from your portfolio contact form
            </p>
            <p style="color: #64748b; font-size: 12px; margin: 5px 0;">
              ⏰ ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
              })}
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (notificationError) {
      console.error('Notification email error:', notificationError);
      return NextResponse.json({ error: notificationError }, { status: 500 });
    }

    // Send auto-reply to the user
    const { error: autoReplyError } = await resend.emails.send({
      from: 'Aryan Raj <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for reaching out! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a; color: #e2e8f0; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #06b6d4; margin: 0; font-size: 28px;">Hi ${name}! 👋</h1>
            <div style="height: 4px; width: 60px; background: linear-gradient(to right, #06b6d4, #a855f7); margin: 15px auto; border-radius: 2px;"></div>
          </div>
          
          <div style="background-color: #1e293b; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <p style="color: #cbd5e1; line-height: 1.8; margin: 0 0 15px 0;">
              Thank you for contacting me! I've received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background: linear-gradient(135deg, #06b6d4 0%, #a855f7 100%); padding: 3px; border-radius: 8px; margin: 20px 0;">
              <div style="background-color: #1e293b; padding: 20px; border-radius: 6px;">
                <p style="margin: 0 0 10px 0; color: #06b6d4; font-weight: bold;">Your message:</p>
                <p style="margin: 0; color: #94a3b8; line-height: 1.6; font-style: italic; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <p style="color: #cbd5e1; line-height: 1.8; margin: 15px 0 0 0;">
              I typically respond within <strong style="color: #06b6d4;">24 hours</strong>. In the meantime, feel free to explore my work!
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #cbd5e1; margin-bottom: 15px;">Connect with me:</p>
            <div style="display: inline-block;">
              <a href="https://github.com/yourusername" style="display: inline-block; margin: 0 5px; padding: 12px 24px; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
                💻 GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" style="display: inline-block; margin: 0 5px; padding: 12px 24px; background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
                💼 LinkedIn
              </a>
            </div>
          </div>
          
          <div style="background-color: #1e293b; padding: 20px; border-radius: 8px; text-align: center;">
            <p style="color: #cbd5e1; margin: 0 0 10px 0; font-size: 16px;">
              Best regards,
            </p>
            <p style="color: #06b6d4; margin: 0; font-size: 20px; font-weight: bold;">
              Aryan Raj
            </p>
            <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">
              Fullstack Developer | MERN Stack
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #334155;">
            <p style="color: #64748b; font-size: 11px; margin: 5px 0;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    });

    if (autoReplyError) {
      console.warn('Auto-reply email failed:', autoReplyError);
      // Don't fail the request if auto-reply fails
    }

    return NextResponse.json(
      { 
        message: 'Email sent successfully!',
        data: notificationData 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}