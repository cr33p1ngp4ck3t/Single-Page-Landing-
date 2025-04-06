import Link from "next/link";

export default function Navbar() {
	return (
		<div className=" absolute top-0 w-full z-10 text-white">
			<div className="flex justify-between items-center p-4 md:px-8 px-4">
				<div>
					<Logo />
				</div>
				<div className="flex md:gap-8 gap-4 md:text-lg text-sm font-semibold">
					<Link href={"#services"}>Services</Link>
					<Link href={"#contact"}>Contact</Link>
				</div>
			</div>
		</div>
	);
}

export const Logo = () => {
	return (
		<svg width="150" height="35" xmlns="http://www.w3.org/2000/svg">
			<style>{`
        .large-text { 
          font-family: Arial, sans-serif; 
          font-size: 20px; 
          fill: #fff;
        }
        .small-text { 
          font-family: Arial, sans-serif; 
          font-size: 10px; 
          fill: #fff;
          letter-spacing: 1px;
        }
      `}</style>

			<g id="decorative">
				<line x1="15" y1="19" x2="15" y2="8" stroke="#fff" strokeWidth="1" />
				<line x1="17" y1="19" x2="17" y2="8" stroke="#fff" strokeWidth="1" />
			</g>

			<text x="10" y="20" className="large-text">
				<tspan>CREATIVE</tspan>
			</text>

			<text x="10" y="30" className="small-text">
				PLUTO TECHNOLOGIES
			</text>
		</svg>
	);
};
