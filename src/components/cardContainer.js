import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
  max-width: 90%;
  margin: 2.5em auto;
  box-shadow: 2px 4px 13px 7px rgba(63, 145, 142, 1);
  text-align: left;
  padding: 1em 1em 1em 1.2em;
  border-radius: 10px;

  @media (min-width: 500px) {
    padding-left: 2.5em;
  }

  @media (min-width: 750px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1em;
  }
`;

export default CardContainer;
