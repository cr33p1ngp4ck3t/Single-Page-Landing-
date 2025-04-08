import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.FROM_EMAIL;

export async function POST(req) {
	const { name, email, phone, company, message } = await req.json();
	console.log(name, email, phone, company, message);
	try {
		const data = await resend.emails.send({
			from: `${name} <admin@resend.dev>`,
			to: ["mailgoeshere@example.com"],
			subject: `Request from ${name}`,
			html: `
					<h1>New Request</h1>
					<h4>Name: ${name}</h4>
					<h4>Email: ${email}</h4>
					<h4>Phone: ${phone}</h4>
					<h4>Company: ${company}</h4>\n
					<p>Message: ${message}</p>
				`,
		});
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: error.message });
	}
}
