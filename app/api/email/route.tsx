// import { render } from "@react-email/components";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
// import { EmailMessage } from "../../[locale]/components/EmailMessage";
// import { render } from "@react-email/render";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // const emailHtml = render(
  //   <EmailMessage name={name} email={email} message={message} />
  // );

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    cc: email, //(uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
    // html: emailHtml,
    html: `
    <p>This message was sent from the website ${process.env.SITE_DOMAIN}</p>
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
    // transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
