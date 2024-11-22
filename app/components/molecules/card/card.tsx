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
      <h3>name: {name}</h3>
      <h3>description: {description}</h3>
      <h3>image: {image}</h3>
      <h3>game: {game}</h3>
      <h3>price: {price}</h3>
      <h3>previousPrice: {previousPrice}</h3>
      <h3>onSale: {onSale}</h3>
    </section>
  );
}
