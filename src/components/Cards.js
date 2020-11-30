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
              src="images/img-9.jpg"
              text="Adipisicing ullam eveniet mollitia optio aliquam Possimus"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Adipisicing ullam eveniet mollitia optio aliquam Possimus"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
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
