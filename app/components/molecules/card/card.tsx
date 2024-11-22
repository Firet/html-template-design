import Image from "next/image";
import Button from "../button/button";
import "./card.css";

interface CardProps {
  name: string;
  description: string;
  image: string;
  game: string;
  price: number;
  previousPrice?: number;
  onSale?: boolean;
}

export default function card({
  name,
  description,
  image,
  game,
  price,
  previousPrice,
  onSale,
}: CardProps) {
  return (
    <section className="card">
      <div className="card-content-container">
        <h3>name: {name}</h3>
        <h3>description: {description}</h3>
        <h3>image: {image}</h3>
        <Image
          src={image}
          alt="Video-game Item"
          className="item-image"
          unoptimized
          width={50}
          height={50}
        />
        <h3>game: {game}</h3>
        <h3>price: {price}</h3>
        <h3>previousPrice: {previousPrice}</h3>
        <h3>{onSale ? "On Sale" : null}</h3>
      </div>
      <div className="button-container">
        <Button>Details</Button>
        <Button>Add</Button>
      </div>
    </section>
  );
}
