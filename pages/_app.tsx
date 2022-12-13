import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Samuele Piazzesi Personal Space</title>
				<meta
					name="description"
					content="Full Stack Engineer who loves build things. I'm a tech passionate, guitar evangelist and food enthusiast. Check out my projects, or write me on Socials"
				/>

				{/* Google / Search Engine Tags --> */}
				<meta name="name" content="Samuele Piazzesi Personal Space" />
				<meta
					name="description"
					content="Full Stack Engineer who loves build things. I'm a tech passionate, guitar evangelist and food enthusiast. Check out my projects, or write me on Socials"
				/>
				<meta
					name="image"
					content="https://samuelepiazzesi.com//assets/img/about/me.jpg"
				/>

				{/* <Facebook Meta Tags --> */}
				<meta property="og:url" content="samuelepiazzesi.com" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Samuele Piazzesi Personal Space" />
				<meta
					property="og:description"
					content="Full Stack Engineer who loves build things. I'm a tech passionate, guitar evangelist and food enthusiast. Check out my projects, or write me on Socials"
				/>
				<meta
					property="og:image"
					content="https://samuelepiazzesi.com//assets/img/about/me.jpg"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Samuele Piazzesi Personal Space" />
				<meta
					name="twitter:description"
					content="Full Stack Engineer who loves build things. I'm a tech passionate, guitar evangelist and food enthusiast. Check out my projects, or write me on Socials"
				/>
				<meta
					name="twitter:image"
					content="https://samuelepiazzesi.com//assets/img/about/me.jpg"
				/>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖥️</text></svg>"
				></link>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
