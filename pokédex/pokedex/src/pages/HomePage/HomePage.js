import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPokemons from "./CardPokemons";
import styled from "styled-components";

const ContainerPai = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ContainerCards = styled.div`

display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

`;

export default function HomePage() {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    axios
      .get(url)
      .then((response) => {
        setPokes(response.data.results);
      console.log(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dadosPoke = pokes.map((dados) => {
    return (
      <>
        <CardPokemons dados={dados} />
      </>
    );
  });

  return (
    <ContainerPai>
      <h1> HomePage </h1>

      <ContainerCards>{dadosPoke}</ContainerCards>
    </ContainerPai>
  );
}
