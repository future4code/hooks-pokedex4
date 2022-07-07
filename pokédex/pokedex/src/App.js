import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import Navbar from "./Components/Navbar";
import Pokedex from "./Components/Pokedex";
import { FavoriteProvider } from "./Contexts/FavoriteContext";

const favoritesKey = "favorites";
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 24;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);

      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey));
    setFavorites(pokemons);
  };
  useEffect(() => {
    loadFavoritePokemons();
  });
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1);
    } else {
      updateFavorites.push(name);
    }
    window.localStorage.setItem(favoriteIndex, JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);
  };
  return (
    <FavoriteProvider
      value={{
        favoritePokemon: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar />
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </FavoriteProvider>
  );
}

export default App;
