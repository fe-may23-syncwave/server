import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST as string,
  port: process.env.SMTP_PORT as unknown as number,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export function send({
  email,
  subject,
  html,
}: {
  email: string;
  subject: string;
  html: string;
}) {
  return transporter.sendMail({
    from: 'Auth API', // sender address
    to: email,
    subject,
    text: '',
    html,
  });
}

export function sendActivationLink(email: string, token: string) {
  const link = `${process.env.CLIENT_URL}/client/#/activate/${token}`;

  return send({
    email,
    subject: 'Account activation',
    html: `
      <h1>Account activation</h1>
      <a href="${link}">${link}</a>
    `,
  });
}

export const emailService = { send, sendActivationLink };
