import { FormButton } from "@/components/ui/demo";

export default function Contact() {
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
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut dolorem
							provident suscipit{" "}
						</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-5 max-w-[1280px] lg:w-1/2 w-full p-4 py-6">
						<div className="flex gap-5 flex-col md:flex-row w-full  ">
							<FormButton label="First Name" type="text" />
							<FormButton label="Last Name" type="text" />
						</div>
						<div className="flex flex-col gap-5 w-full ">
							<FormButton label="Company" type="text" />
							<FormButton label="Email" type="Email" />
							<FormButton label="Message" type="text" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
