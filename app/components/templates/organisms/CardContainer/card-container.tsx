import Card from "@/app/components/molecules/card/card";
import videogameItemCards from "@/app/constants/videogame-item-card/videogame-item-card";

export default function CardContainer() {
  videogameItemCards;
  return (
    <section className="card-container">
      <p>Card Container</p>
      {/* <Card /> */}
      <ul className="videogameitem-list">
        {videogameItemCards.map((videogameItemCard) => (
          <li key={videogameItemCard.id} className="card-item">
            {videogameItemCard.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
