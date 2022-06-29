import React from "react";
import styled from "styled-components";


const ContainerDetailCard = styled.div`
  
`;


export default function CardPokemons(props) {
  const { name } = props.dados;

  return (
    
    
      <ContainerDetailCard>
      {name} 
      
        </ContainerDetailCard>
    
  );
}