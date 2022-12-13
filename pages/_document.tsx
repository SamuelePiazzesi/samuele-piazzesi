import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta title="Samuele Piazzesi Personal Space" />
				<meta
					name="description"
					content="Full Stack Engineer who loves build things."
				/>
				<meta name="author" content="Samuele Piazzesi" />
				<meta name="theme-color" content="#000000" />

				<meta property="og:image" content="/assets/img/about/me.jpg" />
				<meta property="og:title" content="Samuele Piazzesi" />
				<meta property="og:site_name" content="Samuele Piazzesi" />
				<meta property="og:url" content="https://samuelepiazzesi.com" />
				<meta
					property="og:description"
					content="Full Stack Engineer who loves build things."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:type" content="website" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="samuelepiazzesi.com" />
				<meta property="twitter:url" content="https://samuelepiazzesi.com/" />
				<meta name="twitter:title" content="SamuelePiazzesi" />
				<meta
					name="twitter:description"
					content="Full Stack Engineer who loves build things."
				/>
				<meta name="twitter:image" content="/assets/img/about/me.jpg" />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖥️</text></svg>"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
