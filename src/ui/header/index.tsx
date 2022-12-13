import classes from "./header.module.css";

const Header = () => {
	return (
		<header>
			<h5 className={classes.label}>Hi! You are in</h5>
			<h1 className={classes.title}>Samuele Piazzesi</h1>
			<div className={classes.subtitle}>
				<span>🖥️</span>
				<span>Personal Space</span>
			</div>
		</header>
	);
};

export default Header;
