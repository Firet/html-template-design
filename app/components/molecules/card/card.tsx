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
        <div className="amount-and-sale-row">
          <div>
            <p>{onSale ? "On Sale" : null}</p>
            <p>In Stock</p>
          </div>
          <Input type="number" className="amount-input" value="1"></Input>
        </div>
        <Image
          src={image}
          alt="Video-game Item"
          className="item-image"
          unoptimized
          width={65}
          height={65}
        />
        <div className="name-and-game-row">
          <p>{name}</p>
          <Image
            src={game}
            alt="Game Logo"
            className="game-image"
            unoptimized
            width={35}
            height={35}
          />
        </div>
        <div className="price-section">
          <p className="actual-price">${price}</p>
          <del className="strikethrough">
            <p className="previous-price">
              {previousPrice ? `$ ${previousPrice}` : null}
            </p>
          </del>
        </div>
        <p>{description}</p>
      </div>
      <div className="button-container">
        <Button>Details</Button>
        <Button priority="primary">Add</Button>
      </div>
    </section>
  );
}
