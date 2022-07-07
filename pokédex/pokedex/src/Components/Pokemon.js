import React, {useContext} from "react";
import FavoriteContext from "../Contexts/FavoriteContext";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
  const { pokemon } = props;
  const onChosenClick = () =>{
    updateFavoritePokemons(pokemon.name)
  }
  const chosen = "Adicionar"
  return ( 
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-btn">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
                return(
                    <div key={index} className="pokemon-type-text">{type.type.name}</div>
                )
            })}
          </div>
          <button className="pokemon-chosen" onClick={onChosenClick}>
            {chosen}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
