import Card from "@/app/components/molecules/card/card";
import videogameItemCards from "@/app/constants/videogame-item-card/videogame-item-card";
import "./card-container.css";

export default function CardContainer() {
  videogameItemCards;
  return (
    <section className="card-container">
      <p>Showing 11 - from 125</p>
      <ul className="videogameitem-list">
        {videogameItemCards.map((videogameItemCard) => (
          <li>
            <Card
              name={videogameItemCard.name}
              description={videogameItemCard.description}
              image={videogameItemCard.image}
              game={videogameItemCard.game}
              price={videogameItemCard.price}
              previousPrice={videogameItemCard.previousPrice}
              onSale={videogameItemCard.onSale}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
