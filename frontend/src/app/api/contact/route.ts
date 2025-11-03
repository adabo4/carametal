import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, textMessage } = body;

    // Create transporter with your email provider
    const transporter = nodemailer.createTransport({
      service: "gmail", // or 'outlook', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // Email to you (receiving the contact form)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: "carametal.contact@gmail.com", // Replace with your actual email
      replyTo: email, // This makes "Reply" go to the sender's email
      subject: `Nová správa z kontaktného formulára - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nová správa z webu Carametal
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Kontaktné údaje:</h3>
            <p><strong>Meno:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefón:</strong> ${phone || "Neuvedené"}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Správa:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${textMessage}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Táto správa bola odoslaná z kontaktného formulára na webe carametal.sk</p>
            <p>Odoslané: ${new Date().toLocaleString("sk-SK")}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the user
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Ďakujeme za Vašu správu - Carametal",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Ďakujeme za Vašu správu
          </h2>
          
          <p>Vážený/á ${firstName},</p>
          
          <p>ďakujeme Vám za záujem o naše služby. Vašu správu sme úspešne prijali a budeme Vás kontaktovať v najbližšom možnom čase.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Vaša správa:</h3>
            <p style="margin-bottom: 0;">${textMessage}</p>
          </div>
          
          <p>V prípade naliehavých otázok nás môžete kontaktovať aj telefonicky.</p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #007bff; color: white; border-radius: 5px;">
            <h3 style="margin-top: 0; color: white;">CARAMETAL spol. s.r.o.</h3>
            <p style="margin: 5px 0;">Povrchové úpravy a ochrana kovov</p>
            <p style="margin: 5px 0;">Telefon: +421 37 77 29065</p>
            <p style="margin: 5px 0;">Email: <a href="mailto:info@carametal.sk" style="color: white; text-decoration: underline;">info@carametal.sk</a></p>
            <p style="margin-bottom: 0;">Web: <a href="https://www.carametal.sk" style="color: white; text-decoration: underline;" target="_blank">www.carametal.sk</a></p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(autoReply);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
