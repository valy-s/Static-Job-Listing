import React from "react";
import Card from "../components/card/card.js";

function DisplayCards(props) {
  let cards = props.map((item) => {
    const {
      id,
      company,
      logo,
      featured,
      new: newPost,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = item;
    return (
      <Card
        key={id}
        logo={logo}
        new={newPost}
        featured={featured}
        company={company}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
        role={role}
        level={level}
        languages={languages}
        tools={tools}
      />
    );
  });
  return cards;
}

export default DisplayCards;
