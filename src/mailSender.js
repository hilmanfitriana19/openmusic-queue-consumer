const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  sendEmail(targetEmail, playlistName, content) {
    const message = {
      from: 'OpenMusic V3',
      to: targetEmail,
      subject: `Ekspor Playlist ${playlistName}`,
      text: 'Terlampir hasil dari ekspor playlist',
      attachments: [
        {
          filename: `${playlistName}.json`,
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
