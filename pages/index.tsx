import localFont from "@next/font/local";
import Image from "next/image";
import emojis from "../public/assets/img/pc.svg";
import { cards } from "../src/constants";
import Cards from "../src/ui/cards";
import Card from "../src/ui/cards";
import Footer from "../src/ui/footer";
import Header from "../src/ui/header";

const hubotSans = localFont({
	src: [
		{
			path: "../public/assets/fonts/Hubot-Sans-RegularSemi.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/assets/fonts/Hubot-Sans-BoldSemi.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/assets/fonts/Hubot-Sans-BoldWide.woff2",
			weight: "700",
			style: "normal",
		},
	],
});

export default function Home() {
	return (
		<main className={hubotSans.className}>
			<div className="screen">
				<div className="content">
					<Header />

					<Cards />

					<Footer />
				</div>
			</div>
		</main>
	);
}
