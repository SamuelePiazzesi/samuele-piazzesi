export type Card = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export const cards: Card[] = [
  {
    id: 1,
    title: "GovTree",
    description:
      "It's like linktree, but for Italian Public Services. It's a website that allows you to easily find the specific website for your taxes declaration (Yes i pay taxes).",
    link: "https://govtree.info",
  },
  {
    id: 1,
    title: "Nextjs Hotjar",
    description:
      "Plugin that allows you to easily integrate Hotjar in your Next.js application.",
    link: "https://github.com/SamuelePiazzesi/nextjs-hotjar",
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
];
