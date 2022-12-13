import Link from "next/link";
import { cards } from "../../constants";
import { LinkIcon } from "../icons";
import classes from "./cards.module.css";

const Cards = () => {
	return (
		<section className={classes.section}>
			<div className={classes.cards}>
				{cards.map(({ title, description, id, link }) => (
					<Link target={"_blank"} href={link} className={classes.card} key={id}>
						<span className={classes.number}>#{id}</span>
						<article className={classes.article}>
							<strong>{title}</strong>
							<p>{description}</p>
						</article>

						<span className={classes.link}>
							<LinkIcon />
						</span>
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
