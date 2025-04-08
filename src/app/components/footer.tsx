import Image from "next/image";
export default function Footer() {
	return (
		<div>
			<div>
				<div className=" border-t border-t-gray-400">
					<div className="flex flex-col items-center justify-center py-12 bg-white">
						<div>
							<div className="text-4xl font-bold py-6 text-neutral-900  capitalize">
								Creative Pluto technologies
							</div>
						</div>
						<div className="flex gap-5 items-center justify-center py-6">
							<a>
								<Image
									width={24}
									height={24}
									src="/whatsapp.svg"
									alt=""
									className="w-6 h-6"
								/>
							</a>
							<a>
								<Image
									width={24}
									height={24}
									src="/facebook.svg"
									alt=""
									className="w-6 h-6"
								/>
							</a>
							<a>
								<Image
									width={24}
									height={24}
									src="/instagram.svg"
									alt=""
									className="w-6 h-6"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
