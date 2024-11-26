import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    cc: email,
    subject: `Message from ${name} (${email})`,
    text: message,
    html: `
    <p>Your message has been successfully sent to ${process.env.SITE_DOMAIN}</p>
   <p>Message content</p>
    <p>sender: <b>${name}</b></p>
    <p>email: ${email}</p>
    <p>to: ${process.env.EMAIL}</p>
    <p>${message}</p>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email was sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
