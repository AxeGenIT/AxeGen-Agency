import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, projectType, details } = await request.json();
    
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVING_EMAIL,
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Project Inquiry</h2>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #4f46e5; margin-bottom: 5px;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #4f46e5; margin-bottom: 5px;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Description:</strong></p>
            <p style="background-color: #fff; padding: 15px; border-radius: 5px; border-left: 3px solid #4f46e5;">${details}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
            <p>This message was sent from the Axegen contact form</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}