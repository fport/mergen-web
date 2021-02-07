import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Tüm gücümüzle milli mücadeleye katkı sunmaya çalışıyoruz !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="Haluk Bayraktar MERGEN'i ziyaret etti."
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-9.jpg"
              text="MERGEN Teknofest 2020'de finale kaldı."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="MERGEN semalarda..."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="MERGEN v1"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="MERGEN gökyüzünde süzülüyor..."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
