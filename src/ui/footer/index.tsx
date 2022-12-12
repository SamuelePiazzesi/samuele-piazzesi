import { EmailIcon, GithubIcon, LinkedinIcon } from "../icons";
import classes from "./footer.module.css";

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<span className={classes.label}>Reach me here</span>
			<div className={classes.social}>
				<LinkedinIcon />
				<EmailIcon />
				<GithubIcon />
			</div>
		</footer>
	);
};

export default Footer;
