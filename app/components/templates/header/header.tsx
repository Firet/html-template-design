import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
    <header className="header-container">
      <section>
        <Image
          src={"./chicks-logo-large.svg"}
          alt="Chick Logo"
          className="chick-logo"
          unoptimized
          width={125}
          height={125}
        />
      </section>
      <section className="nav-container">
        <div>Currency</div>
        <div>Items</div>
        <div>Accounts</div>
        <div>Service</div>
        <div>Swap</div>
        <div>Sell</div>
      </section>
      <section>
        <div>USD</div>
        <div>cart</div>
        <div>SING IN</div>
      </section>
    </header>
  );
}
