export type Card = {
	id: number;
	title: string;
	description: string;
	link: string;
};

export const cards: Card[] = [
	{
		id: 1,
		title: "Nextjs Hotjar",
		description:
			"Next.js plugin that allows you to easily integrate Hotjar in your Next.js application.",
		link: "https://github.com/SamuelePiazzesi/nextjs-hotjar",
	},
	{
		id: 2,
		title: "Solito Supabase Template",
		description:
			"Solito Library (React Native + Next.js, unified) template, wrapped with Supabase and authentication handler.",
		link: "https://github.com/SamuelePiazzesi/Solito-Supabase-Template",
	},
	{
		id: 3,
		title: "Memes bot",
		description:
			"Telegram bot that sends memes, filtered by hotness and other cool features taken from /memes subreddit.",
		link: "https://github.com/SamuelePiazzesi/MemesBot",
	},
	{
		id: 4,
		title: "Rinald",
		description:
			"Netflix-ish website made with some cool libraries. Do you know Rinald? He's a cool guy.",
		link: "https://rinaldsefa.com",
	},
	{
		id: 1,
		title: "Voltorb Flip 3D",
		description:
			"Mingame 3D replica of Voltorb Flip, the magnificent game from Pokémon HeartGold and SoulSilver series.",
		link: "https://github.com/SamuelePiazzesi/Voltorb-Flip-3D",
	},
];
