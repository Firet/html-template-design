import Image from "next/image";
import "./header.css";
import Button from "../../molecules/button/button";

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
        <div className="nav-item">Currency<img src="./arrow-down.svg" className="arrow" width={11} alt="arrow down" /></div>
        <div className="nav-item">Items<img src="./arrow-down.svg" className="arrow" width={11} alt="arrow down" /></div>
        <div className="nav-item">Accounts<img src="./arrow-down.svg" className="arrow" width={11} alt="arrow down" /></div>
        <div className="nav-item">Service<img src="./arrow-down.svg" className="arrow" width={11} alt="arrow down" /></div>
        <div className="nav-item">Swap<img src="./arrow-down.svg" className="arrow" width={11} alt="arrow down" /></div>
        <div className="nav-item">Sell<img src="./arrow-down.svg" className="arrow" width={11} alt="arrow down" /></div>
      </section>
      <section className="user-section">
        <div className="nav-item">USD <img src="./arrow-down.svg" className="arrow" width={11} alt="arrow down" /></div>
        <div className="nav-item"> <img src="./cart.svg" className="cart" width={11} alt="cart" />CART(5)</div>
        <div><Button priority="accent">SIGN IN</Button></div>
      </section>
    </header>
  );
}
