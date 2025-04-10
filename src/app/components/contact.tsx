/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FormButton } from "@/components/ui/demo";
import { useState } from "react";

export default function Contact() {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const data = {
			name: e.target.name.value,
			email: e.target.email.value,
			phone: e.target.phone.value,
			company: e.target.company.value,
			message: e.target.message.value,
			country: e.target.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = "/api/send";

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);
		// const resData = await response.json();

		if (response.status === 200) {
			console.log("Message sent.");
			setEmailSubmitted(true);
		}
	};
	return (
		<div>
			<div>
				<div
					className="flex flex-col items-center justify-center py-16 bg-white"
					id="contact"
				>
					<div className="flex flex-col items-center justify-center text-center lg:w-1/2 p-6 ">
						<h1 className=" text-4xl font-bold py-6 text-neutral-900 ">
							Let{`'`}s Work Together
						</h1>
						<p className=" text-gray-400 ">
							Ready to bring your vision to life? Whether it{`'`}s a fresh website or
							a design update, we{`'`}re here to make it happen.
						</p>
					</div>

					<form
						className="flex flex-col justify-center items-center gap-5 max-w-[1280px] lg:w-1/2 w-full p-4 py-6"
						onSubmit={handleSubmit}
					>
						<div className="flex gap-5 flex-col md:flex-row w-full  ">
							<FormButton label="First Name" type="text" name="name" />
							<FormButton label="Last Name" type="text" />
						</div>
						<div className="flex gap-5 flex-col md:flex-row w-full  ">
							<FormButton label="Email" type="email" name="email" />
							<FormButton label="Phone" type="tel" name="phone" />
						</div>
						<div className="flex gap-5 flex-col md:flex-row w-full  ">
							<FormButton label="Country" type="text" name="country" />
							<FormButton label="Company" type="text" name="company" />
						</div>
						<div className="flex flex-col gap-5 w-full ">
							<textarea
								className="flex h-12 w-full rounded-lg border-gray-600 border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
								name="message"
								placeholder="Message"
								required
							/>
							<button
								type="submit"
								className="cursor-pointer w-fit rounded-lg px-6 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
							>
								Send Message
							</button>
						</div>
						{emailSubmitted && (
							<p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}
