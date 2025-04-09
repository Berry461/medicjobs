import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const coverLetter = formData.get('coverLetter');
    const resume = formData.get('resume');
    const jobTitle = formData.get('jobTitle');
    const jobId = formData.get('jobId');

    // Validate required fields
    if (!firstName || !lastName || !email || !coverLetter || !resume || !jobTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        { error: 'Only PDF and Word documents are allowed' },
        { status: 400 }
      );
    }

    // Send email with attachment
    const { data, error } = await resend.emails.send({
      from: `${process.env.NEXT_PUBLIC_SITE_NAME} Careers <onboarding@resend.dev>`,
      to: ['Olapeju.olasokan@gmail.com'],
      reply_to: email,
      subject: `Job Application: ${jobTitle}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Position:</strong> ${jobTitle} (ID: ${jobId})</p>
        <p><strong>Applicant:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <h3>Cover Letter:</h3>
        <p>${coverLetter}</p>
      `,
      attachments: [{
        filename: resume.name,
        content: Buffer.from(await resume.arrayBuffer())
      }]
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}