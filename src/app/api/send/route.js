import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

const validateEmail = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
};

const isEmpty = (value) => {
    return String(value).trim().length === 0;
}

export async function POST(req, res) {

    const body = await req.json();
    const { email, subject, message } = body;

    if (isEmpty(email) || isEmpty(subject) || isEmpty(message)) {
        return NextResponse.json({ error: 'EmptyFields' });
    } else if (!validateEmail(email)) {
        return NextResponse.json({ error: 'InvalidEmail' });
    }

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: toEmail,
            subject: 'Portfolio: ' + subject,
            react: (
                <>
                    <p>{message}</p>
                    <p style={{ textDecoration: 'none', color: 'black'}}>
                        Sent by: {" "}
                        {email}
                    </p>
                </>
            )
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}