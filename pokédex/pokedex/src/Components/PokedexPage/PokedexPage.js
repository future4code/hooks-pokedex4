import React, { useContext } from "react";
import FavoriteContext from "../../Contexts/FavoriteContext";

export default function PokedexPage(){
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    console.log(localStorage.getItem(favoritePokemons))
    return (
            <h1>Pokedex</h1>
        
    )
}