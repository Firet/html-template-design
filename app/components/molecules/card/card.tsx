interface CardProps {
  name: string;
  description: string;
}

export default function card({ name, description }: CardProps) {
  return (
    <section className="card">
      <h3>name: {name}</h3>
      <h3>description: {description}</h3>
    </section>
  );
}
