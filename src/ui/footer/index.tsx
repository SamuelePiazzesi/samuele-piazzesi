import Link from "next/link";
import { EmailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../icons";
import classes from "./footer.module.css";

const Footer = () => {
	const links = [
		{
			id: "linkedin",
			icon: <LinkedinIcon />,
			href: "https://www.linkedin.com/in/samuelepiazzesi/",
		},
		{
			id: "email",
			icon: <EmailIcon />,
			href: "mailto:samuelepiazzesi@gmail.com",
		},
		{
			id: "github",
			icon: <GithubIcon />,
			href: "https://github.com/SamuelePiazzesi?tab=repositories",
		},
		{
			id: "twitter",
			icon: <TwitterIcon />,
			href: "https://twitter.com/sam_piazzesi",
		},
	];
	return (
		<footer className={classes.footer}>
			<span className={classes.label}>Reach me here</span>
			<div className={classes.social}>
				{links.map(({ id, icon, href }) => (
					<Link key={id} href={href} target="_blank">
						{icon}
					</Link>
				))}
			</div>
		</footer>
	);
};

export default Footer;
