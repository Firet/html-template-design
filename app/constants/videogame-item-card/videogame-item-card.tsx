interface videogameItemCard {
  id: number;
  name: string;
  description: string;
  logo: string;
}

const videogameItemCards: videogameItemCard[] = [
  {
    id: 1,
    name: "Lion Heart",
    description: "Squall most wanted gun blade",
    logo: "./lion-heart.png",
  },
  {
    id: 2,
    name: "Ehrgeiz",
    description: "Bst Zell gloves all over the world",
    logo: "./ehrgeiz.png",
  },
];

export default videogameItemCards;
