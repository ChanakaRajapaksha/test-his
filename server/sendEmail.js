import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import { Worker, isMainThread } from 'worker_threads';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});

// Function to send an email
const sendAppointmentEmail = async (req, res) => {
    const { title, doctor, specialization, start, end } = req.body;

    const mailOptions = {
        from: {
            name: 'Appointment Notification',
            address: process.env.USER,
        },
        to: ["rcprajapaksha123@gmail.com"],
        subject: `New Appointment: ${title}`,
        text: `Appointment Details:\n
                Doctor: ${doctor}\n
                Specialization: ${specialization}\n
                Start: ${start}\n
                End: ${end}\n`,
        html: `
            <div style="font-family: Arial, sans-serif; color: #333333;">
                <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #f7f7f7; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0;">
                    <h2 style="font-size: 22px; color: #3d85c6; border-bottom: 2px solid #3d85c6; padding-bottom: 8px;">Appointment Details</h2>
                    <ul style="list-style: none; padding: 0; margin: 15px 0;">
                        <li style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; font-size: 16px;"><b style="color: #3d85c6;">Doctor:</b> ${doctor}</li>
                        <li style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; font-size: 16px;"><b style="color: #3d85c6;">Specialization:</b> ${specialization}</li>
                        <li style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; font-size: 16px;"><b style="color: #3d85c6;">Start:</b> ${new Date(start).toLocaleString()}</li>
                        <li style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; font-size: 16px;"><b style="color: #3d85c6;">End:</b> ${new Date(end).toLocaleString()}</li>
                    </ul>
                    <div style="font-size: 12px; color: #666666; text-align: center; margin-top: 20px;">This is an automatically generated email. Please do not reply.</div>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email", error });
    }
};

// Main endpoint for sending appointment emails
app.post('/send-appointment', sendAppointmentEmail);

// Start the logWorker in a separate thread
if (isMainThread) {
    const logWorker = new Worker('./logWorker.js');
    const statusWorker = new Worker('./statusWorker.js');

    // Log worker errors or exits if needed
    logWorker.on('error', (error) => console.error("Log Worker error:", error));
    statusWorker.on('error', (error) => console.error("Status Worker error:", error));

    logWorker.on('exit', (code) => console.log(`Log Worker stopped with exit code ${code}`));
    statusWorker.on('exit', (code) => console.log(`Status Worker stopped with exit code ${code}`));
}

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
