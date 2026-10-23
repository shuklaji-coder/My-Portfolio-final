import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, timeline, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Email service is temporarily unavailable. Please use direct email or WhatsApp." },
        { status: 500 }
      );
    }
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "shuklarohan388@gmail.com";
    const receiverEmail = process.env.BREVO_RECEIVER_EMAIL || "shuklarohan388@gmail.com";

    // Escape HTML characters in user inputs to prevent injection
    const sanitize = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeProjectType = sanitize(projectType || "Full-Stack Project");
    const safeTimeline = sanitize(timeline || "Standard Delivery");
    const safeMessage = sanitize(message).replace(/\n/g, "<br/>");

    // Luxury Dark Emerald & Champagne HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #041B14; }
          .container { max-width: 600px; margin: 20px auto; background-color: #06241B; border: 1px solid #E8D5A8; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { background: linear-gradient(135deg, #0C3A2C 0%, #06241B 100%); padding: 32px 24px; border-bottom: 1px solid rgba(232, 213, 168, 0.2); text-align: center; }
          .title { color: #F7F1E3; font-size: 24px; font-weight: 300; margin: 0; font-family: Georgia, serif; }
          .title span { color: #E8D5A8; font-style: italic; }
          .badge { display: inline-block; background-color: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; color: #10B981; font-size: 11px; padding: 4px 12px; border-radius: 9999px; font-family: monospace; text-transform: uppercase; margin-top: 10px; }
          .content { padding: 32px 24px; color: #F7F1E3; }
          .grid { background-color: #0C3A2C; border: 1px solid rgba(232, 213, 168, 0.15); border-radius: 12px; padding: 20px; margin-bottom: 24px; }
          .row { display: flex; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid rgba(232, 213, 168, 0.08); padding-bottom: 10px; font-size: 14px; }
          .row:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
          .label { color: #E8D5A8; font-family: monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
          .value { color: #F7F1E3; font-weight: 500; }
          .message-box { background-color: #041B14; border-left: 3px solid #10B981; border-radius: 8px; padding: 18px; color: #E8D5A8; font-size: 14px; line-height: 1.6; }
          .footer { padding: 24px; text-align: center; border-top: 1px solid rgba(232, 213, 168, 0.1); background-color: #041812; color: rgba(232, 213, 168, 0.5); font-size: 12px; }
          .cta-btn { display: inline-block; background-color: #E8D5A8; color: #06241B !important; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 28px; border-radius: 9999px; text-decoration: none; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">New Client Inquiry • <span>Rohan Shukla</span></h1>
            <div class="badge">Direct Transmission Received</div>
          </div>
          <div class="content">
            <div class="grid">
              <div class="row">
                <span class="label">Client Name:</span>
                <span class="value">${safeName}</span>
              </div>
              <div class="row">
                <span class="label">Client Email:</span>
                <span class="value"><a href="mailto:${safeEmail}" style="color: #10B981; text-decoration: none;">${safeEmail}</a></span>
              </div>
              <div class="row">
                <span class="label">Scope / Architecture:</span>
                <span class="value">${safeProjectType}</span>
              </div>
              <div class="row">
                <span class="label">Target Timeline:</span>
                <span class="value">${safeTimeline}</span>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <span class="label">Project Overview & Objectives:</span>
            </div>
            <div class="message-box">
              ${safeMessage}
            </div>

            <div style="text-align: center; margin-top: 28px;">
              <a href="mailto:${safeEmail}?subject=Re: Project Inquiry (${encodeURIComponent(safeProjectType)})" class="cta-btn">
                Reply to ${safeName} Directly
              </a>
            </div>
          </div>
          <div class="footer">
            Dispatched via Rohan Shukla Portfolio • Brevo Transactional API Relay<br/>
            Mumbai, India • IST (UTC+5:30)
          </div>
        </div>
      </body>
      </html>
    `;

    // Brevo v3 Transactional Email API Payload
    const brevoPayload = {
      sender: {
        name: `Portfolio Inquiry (${name})`,
        email: senderEmail,
      },
      to: [
        {
          email: receiverEmail,
          name: "Rohan Shukla",
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `🚀 Portfolio Lead: ${name} — ${projectType}`,
      htmlContent: htmlContent,
    };

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(brevoPayload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Brevo API error:", errorData);
      return NextResponse.json(
        {
          error:
            errorData.message ||
            "Failed to dispatch email via Brevo. Please use direct email or WhatsApp.",
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      success: true,
      messageId: data.messageId,
    });
  } catch (error) {
    console.error("Contact API route exception:", error);
    return NextResponse.json(
      { error: "Internal server error while processing your inquiry." },
      { status: 500 }
    );
  }
}
