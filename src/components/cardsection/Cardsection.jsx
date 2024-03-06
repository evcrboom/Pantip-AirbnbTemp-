import React from "react";
import cardData from "./carddata";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import Avatar from "@mui/material/Avatar";

function Cardsection() {
  return (
    <section className="Cardsection">
      <div className="card__container">
        {cardData.map((element) => {
          return (
            <div className="card__post" key={element.id}>
              <div className="card__preview">
                {element.tag ? (
                  <div className="preview__highlight">{element.tag}</div>
                ) : null}
                <div className="preview__favorite">
                  <FavoriteTwoToneIcon sx={{ color: "#941AA1", fontSize: 30 }} />
                </div>
                <div className="preview__avatar">
                  <Avatar>{element.avatar}</Avatar>
                </div>
                <img className="img-card" src={element.img} alt="" />
              </div>
              <div className="card__title">
                <h4>{element.toppic}</h4>
                <div className="card__end">
                  <p style={{ color: "grey" }}>{element.categories}</p>
                  <h5 style={{ color: "grey" }}>{element.user}</h5>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
      <div className="showmore__card">
        <h2 style={{ fontSize: "2rem" }}>Continue exploring feeds</h2>
        <button className="showmore__button">Show more</button>
      </div>
    </section>
  );
}

export default Cardsection;
