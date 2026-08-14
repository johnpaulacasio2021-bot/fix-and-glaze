import nodemailer from "nodemailer";
import { ContactFormData } from "./types";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, phone, serviceType, propertyType, location, message, source } = data;

  const htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #0891B2;">New Quote Request - Fix and Glaze</h2>

        <p><strong>From:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p><strong>Service Required:</strong> ${serviceType}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Location:</strong> ${location}</p>
        ${source ? `<p><strong>How they heard about us:</strong> ${source}</p>` : ""}

        <hr />

        <h3>Project Description:</h3>
        <p>${message.replace(/\n/g, "<br />")}</p>

        <hr />
        <p style="font-size: 12px; color: #666;">
          Sent via fixandglaze.com.au contact form
        </p>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Quote Request - ${serviceType}`,
      html: htmlBody,
      replyTo: email,
    });
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    throw error;
  }
}
