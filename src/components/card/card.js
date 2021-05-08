import React from "react";
import "./card.css";
import CardContainer from "../cardContainer.js";
import { add } from "../../store/actions/actions";

function Card(props) {
  return (
    <CardContainer
      style={{
        borderLeft: props.new && props.featured ? "5px solid blue" : " ",
      }}
    >
      <div className="card__info__container">
        <img
          className="card__img"
          src={require(`../../assets${props.logo.substr(1)}`).default}
          alt={`${props.company}-logo`}
        />
        <div className="card__info">
          <h1 className="card__info-company">
            {props.company}
            {props.new ? <span className="card__info-new">New!</span> : ""}
            {props.featured ? (
              <span className="card__info-featured">Featured</span>
            ) : (
              ""
            )}
          </h1>
          <h2 className="card__info-position">{props.position}</h2>
          <div className="card__info-details">
            <ul>
              <li>{props.postedAt}</li>
              <li>{props.contract}</li>
              <li>{props.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card__reqs__container">
        <button onClick={add}>{props.role}</button>
        <button onClick={add}>{props.level}</button>
        {props.languages.map((language, index) => (
          <button onClick={add} key={index}>
            {language}
          </button>
        ))}
        {props.tools.map((tool, index) => (
          <button onClick={add} key={index}>
            {tool}
          </button>
        ))}
      </div>
    </CardContainer>
  );
}

export default Card;
