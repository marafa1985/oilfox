import nodemailer from 'nodemailer';
import { ISendStatus } from "./Types";

// message Template
const Message = `
<b>Dear Sir/Madam,</b> <br /><br />
<b>Please find the attached file</b> <br /><br />
<b>Best Regards</b><br />
<b>Sender</b><br />
`

const Sendemail = async (from: string, to: string, subject: string, fileBuffer: Buffer): Promise<ISendStatus> => {
    //setup mail account Auth
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILACCOUNT,
            pass: process.env.MAILPASSWORD
        }
    });
    //attachement name
    let newdate = new Date();

    //send mail to the passed mail adddress
    let sendstatus: ISendStatus = { state: false };
    await transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: Message,
        attachments: [{
            filename: newdate + '.pdf',
            content: fileBuffer
        }]
    }).then(() => {
        sendstatus = {
            state: true,
            message: `mail send sucessfully to: ${to}`
        };
    }).catch((error: any) => {
        sendstatus = {
            state: false,
            message: `failed to send error: ${error}`
        };
    });
    return sendstatus;
}
export default Sendemail;