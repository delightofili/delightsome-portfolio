import { NextResponse } from "next/server";
import { Resend } from "resend";

// turns < > & " ' into safe text, so nobody can inject HTML into the email you receive
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please fill in all fields" },
        { status: 400 },
      );
    }

    // simple length limit stops someone pasting a huge essay to spam the inbox
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long" },
        { status: 400 },
      );
    }

    // created here, not at the top, so the build never fails when the key is missing locally
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color:#ff5a1f;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${escape(name)}</p>
          <p><strong>Email:</strong> ${escape(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escape(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Could not send the message" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong, please try again" },
      { status: 500 },
    );
  }
}
