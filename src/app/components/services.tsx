import Image from "next/image";

export default function Services() {
	return (
		<div>
			<div>
				<div
					className="flex flex-col items-center justify-center py-20 bg-white"
					id="services"
				>
					<div className="flex flex-col items-center justify-center text-center lg:w-1/2 p-6 ">
						<h4 className="font-extrabold text-blue-700 text-sm  ">Our Services</h4>
						<h2 className="font-bold text-4xl py-6">We are experts in our field.</h2>
						<p className=" text-gray-400  ">
							We build modern, user-friendly websites that make an impact. From design
							to development, we focus on quality, speed, and seamless
							functionality—so you get a website that works for you.
						</p>
					</div>
					<div className="flex flex-col jsutify-center items-center  mt-20 lg:w-2/3 max-w-[1280px] ">
						<div className="flex flex-col items-center md:flex-row ">
							<div className="flex-1 ">
								{/* Image */}
								<Image
									src="/serv-1.jpg"
									alt="services"
									width={1000}
									height={1000}
									className="w-full object-cover h-[300px] mix-w-[450px]  "
								/>
							</div>
							<div className="flex-1 ">
								<div className="lg:p-6 lg:text-start text-center py-4 ">
									{/* Text */}
									<h3 className="text-2xl  ">Custom Website Design</h3>
									<p className="text-gray-400 py-6">
										We craft responsive and visually appealing websites tailored
										to your brand{`'`}s identity. Our designs focus on user
										experience and creating a lasting impression.
									</p>
									<button className="border border-blue-700 text-blue-700 px-6 py-2 text-sm rounded-sm ">
										Learn More
									</button>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center md:flex-row-reverse">
							<div className="flex-1 ">
								{/* Image */}
								<Image
									src="/serv-4.jpg"
									alt="services"
									width={1000}
									height={1000}
									className="w-full object-cover h-[300px] mix-w-[450px]  "
								/>
							</div>
							<div className="flex-1 ">
								<div className="lg:p-6 lg:text-start text-center py-4">
									{/* Text */}
									<h3 className="text-2xl  ">Front-End Development</h3>
									<p className="text-gray-400 py-6">
										Our front-end development brings your vision to life. Using
										modern technologies, we deliver fast, interactive, and
										mobile-friendly websites.
									</p>
									<button className="border border-blue-700 text-blue-700 px-6 py-2 text-sm rounded-sm ">
										Learn More
									</button>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center md:flex-row ">
							<div className="flex-1 ">
								{/* Image */}
								<Image
									src="/serv-3.jpg"
									alt="services"
									width={1000}
									height={1000}
									className="w-full object-cover h-[300px] mix-w-[450px]  "
								/>
							</div>
							<div className="flex-1 ">
								<div className="lg:p-6 lg:text-start text-center py-4">
									{/* Text */}
									<h3 className="text-2xl  ">Maintenance & Optimization</h3>
									<p className="text-gray-400 py-6">
										We ensure your website runs smoothly with regular updates
										and performance enhancements. Stay ahead with a website
										that’s always up to date.
									</p>
									<button className="border border-blue-700 text-blue-700 px-6 py-2 text-sm rounded-sm ">
										Learn More
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
