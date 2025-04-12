"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
	const [hover, setHover] = useState(false);

	const toggleHover = () => setHover((prev) => !prev);

	return (
		<footer className="border-t border-gray-400 bg-white">
			<div className="flex flex-col items-center justify-center py-12">
				<h1 className="text-4xl font-bold py-6 text-neutral-900 capitalize">
					Creative Pluto Technologies
				</h1>

				<nav className="flex gap-5 items-center justify-center py-6">
					{/* WhatsApp */}
					<Link
						href="https://api.whatsapp.com/send/?phone=13656491676&text&type=phone_number&app_absent=0"
						passHref
					>
						<Image
							width={32}
							height={32}
							src="/logo/whatsapp-col.svg"
							alt="WhatsApp Logo"
							className="w-8 h-8 transition-all duration-500 grayscale hover:grayscale-0"
						/>
					</Link>

					{/* LinkedIn */}
					<Link
						href="https://www.linkedin.com/company/creative-pluto-technologies/"
						passHref
					>
						<Image
							width={32}
							height={32}
							src="/logo/linkedin.svg"
							alt="LinkedIn Logo"
							className="w-8 h-8 transition-all duration-500 grayscale hover:grayscale-0"
						/>
					</Link>

					{/* Twitter */}
					<Link href="https://x.com/CreativePluto" passHref>
						<Image
							width={32}
							height={32}
							src={hover ? "/logo/twitter.svg" : "/logo/twitter-light.svg"}
							alt="Twitter Logo"
							className="w-8 h-8 transition-all duration-500 hover:ease-in-out"
							onMouseEnter={toggleHover}
							onMouseLeave={toggleHover}
						/>
					</Link>
				</nav>
			</div>
		</footer>
	);
}
