import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
	return (
		<div>
			<Hero />
			<Services />
			<Contact />
			<Footer />
		</div>
	);
}

