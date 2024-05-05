"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";

export default function ContactForm() {

    const emailStatusRef = useRef<HTMLSpanElement>(null!);

    const [emailStatus, setEmailStatus] = useState('');
    const [emailStatusMessage, setEmailStatusMessage] = useState('');

    useEffect(() => {
        emailStatusRef.current.style.display = 'none';

        if (emailStatus === 'success') {
            emailStatusRef.current.style.color = 'green';
            emailStatusRef.current.style.display = 'block';
        } else if (emailStatus === 'error') {
            emailStatusRef.current.style.color = 'red';
            emailStatusRef.current.style.display = 'block';
        }
        
        emailStatusRef.current.textContent = emailStatusMessage;
        
        const interval = setInterval(() => {
            emailStatusRef.current.style.display = 'none';
        }, 3000);
        
        return () => clearInterval(interval);
    }, [emailStatus, emailStatusMessage]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if (response.status === 200 && !resData.error) {
            setEmailStatus('success');
            setEmailStatusMessage('Message sent successfully.');
        } else {
            setEmailStatus('error');
            if (resData.error === 'EmptyFields'){
                setEmailStatusMessage('Some fields are empty.');
            } else if (resData.error === 'InvalidEmail') {
                setEmailStatusMessage('Invalid email address.');
            } else {
                setEmailStatusMessage('Something went wrong. Please try again.');
            }
        }
    }

    return (
        <>
            <form className="flex flex-col justify-start items-center" onSubmit={handleSubmit}>
                <p className="text-3xl text-foreground font-semibold">Send me a message</p>
                <div className="grid w-full max-w-sm items-center gap-2 mt-8">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="jean.dupont@gmail.com" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2 mt-8">
                    <Label htmlFor="subject">Subject</Label>
                    <Input name="subject" id="subject" placeholder="Just saying hi" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2 mt-8">
                    <Label htmlFor="message">Message</Label>
                    <Textarea name="message" id="message" className="block h-24" placeholder="Let&apos;s talk about..." />
                </div>
                <span 
                    ref={emailStatusRef}
                    className="text-md mt-2"
                ></span>
                <Button className="mt-8 w-full max-w-sm text-lg" type="submit">Send</Button>
            </form>
        </>
    )
}