import Link from "next/link";
import { cards } from "../../constants";
import classes from "./cards.module.css";

const Cards = () => {
	return (
		<section className={classes.section}>
			<div className={classes.cards}>
				{cards.map(({ title, description, id, link }) => (
					<Link target={"_blank"} href={link} className={classes.card} key={id}>
						<span className={classes.number}>#{id}</span>
						<strong>{title}</strong>
						<p>{description}</p>
					</Link>
				))}
			</div>

			<Link
				target={"_blank"}
				href="https://github.com/SamuelePiazzesI"
				className={classes.cta}
			>
				<h5>show more on github</h5>
			</Link>
		</section>
	);
};

export default Cards;
