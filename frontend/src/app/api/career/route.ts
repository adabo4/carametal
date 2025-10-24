import { NextRequest, NextResponse } from "next/server";
import nodemailer, { createTransport } from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, cv, textMessage } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you (receiving the career application)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: "carametal.contact@gmail.com", // Replace with your HR email
      replyTo: email, // This makes "Reply" go to the applicant's email
      subject: `Nová kariérna žiadosť - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
            Nová kariérna žiadosť
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Kontaktné údaje uchádzača:</h3>
            <p><strong>Meno:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefón:</strong> ${phone || "Neuvedené"}</p>
          </div>
          
          ${
            cv
              ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">CV:</h3>
            <p><strong>Súbor:</strong> ${cv.name || "CV priložené"}</p>
          </div>
          `
              : ""
          }
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Správa/Motivačný list:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745;">
              ${textMessage || "Žiadna správa"}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Táto žiadosť bola odoslaná z kariérneho formulára na webe carametal.sk</p>
            <p>Odoslané: ${new Date().toLocaleString("sk-SK")}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to applicant
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Ďakujeme za Vašu žiadosť - Carametal Kariéry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
            Ďakujeme za Váš záujem o prácu v Carametal
          </h2>
          
          <p>Vážený/á ${firstName},</p>
          
          <p>ďakujeme Vám za záujem o prácu v našej spoločnosti. Vašu žiadosť sme úspešne prijali a náš HR tím ju bude čoskoro hodnotiť.</p>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #28a745;">
            <h3 style="color: #333; margin-top: 0;">Čo bude ďalej?</h3>
            <ul style="margin-bottom: 0;">
              <li>Prehodnotíme Vašu žiadosť a CV</li>
              <li>V prípade záujmu Vás budeme kontaktovať do 14 dní</li>
              <li>Pozývame Vás na osobný pohovor</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #28a745; color: white; border-radius: 5px;">
            <h3 style="margin-top: 0; color: white;">CARAMETAL spol. s.r.o.</h3>
            <p style="margin: 5px 0;">Váš partner pre povrchové úpravy kovov</p>
            <p style="margin: 5px 0;">📞 Telefón: +421 37 77 29065</p>
            <p style="margin: 5px 0;">✉️ Email: carametal.contact@gmail.sk</p>
            <p style="margin-bottom: 0;">🌐 Web: www.carametal.sk</p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(autoReply);

    return NextResponse.json(
      { message: "Career application sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending career email:", error);
    return NextResponse.json(
      { message: "Failed to send career application" },
      { status: 500 }
    );
  }
}
