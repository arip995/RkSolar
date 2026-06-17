import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import {
  hasValidationErrors,
  normalizeContactPayload,
  validateContact,
} from "@/lib/contact-validation";
import { contactEmail } from "@/lib/site-data";

export const runtime = "nodejs";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure =
    process.env.SMTP_SECURE === "true" || (!process.env.SMTP_SECURE && port === 465);

  if (!host || !user || !pass || Number.isNaN(port)) {
    return null;
  }

  return { host, port, user, pass, secure };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const values = normalizeContactPayload(payload);
  const errors = validateContact(values);

  if (hasValidationErrors(errors)) {
    return NextResponse.json(
      { message: "Please fix the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    return NextResponse.json(
      {
        message:
          "Email service is not configured. Please contact RK SOLAR directly at rksolar@gmail.com.",
      },
      { status: 500 },
    );
  }

  const submittedAt = new Date();
  const submittedAtText = submittedAt.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
      user: smtpConfig.user,
      pass: smtpConfig.pass,
    },
  });

  const safeName = escapeHtml(values.name);
  const safePhone = escapeHtml(values.phone);
  const safeEmail = escapeHtml(values.email);
  const safeMessage = escapeHtml(values.message).replaceAll("\n", "<br />");
  const safeSubmittedAt = escapeHtml(submittedAtText);

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"RK SOLAR Website" <${smtpConfig.user}>`,
      to: contactEmail,
      replyTo: values.email,
      subject: `New RK SOLAR lead from ${values.name}`,
      text: [
        "New RK SOLAR website enquiry",
        "",
        `Customer name: ${values.name}`,
        `Phone number: ${values.phone}`,
        `Email: ${values.email}`,
        `Message: ${values.message}`,
        `Submission date/time: ${submittedAtText}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #10202f; line-height: 1.6;">
          <h2 style="margin: 0 0 16px; color: #0f4c5c;">New RK SOLAR Website Enquiry</h2>
          <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Customer name</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Phone number</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Email</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 700;">Submission date/time</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${safeSubmittedAt}</td>
            </tr>
          </table>
          <h3 style="margin: 24px 0 8px; color: #0f4c5c;">Message</h3>
          <p style="padding: 16px; background: #f8fafc; border-radius: 12px;">${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Failed to send RK SOLAR contact email", error);
    return NextResponse.json(
      { message: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
