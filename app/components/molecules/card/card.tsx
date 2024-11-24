import Image from "next/image";
import Button from "../button/button";
import "./card.css";
import Input from "../input/input";

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
        <Input type="number" className="amount-input" value="1"></Input>
        <h6>{onSale ? "On Sale" : null}</h6>
        <Image
          src={image}
          alt="Video-game Item"
          className="item-image"
          unoptimized
          width={50}
          height={50}
        />
        <Image
          src={game}
          alt="Game Logo"
          className="game-image"
          unoptimized
          width={50}
          height={50}
        />
        <h6>{name}</h6>
        <div className="price-section">
          <h6 className="actual-price">${price}</h6>
          <del className="strikethrough">
            <h6 className="previous-price">
              {previousPrice ? `$ ${previousPrice}` : null}
            </h6>
          </del>
        </div>
        <h6>{description}</h6>
      </div>
      <div className="button-container">
        <Button>Details</Button>
        <Button>Add</Button>
      </div>
    </section>
  );
}
