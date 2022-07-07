import React, {useContext} from "react";
import FavoriteContext from "../Contexts/FavoriteContext";

const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext);
  return (
    <nav>
      <div>
        <img
          alt="logo-pokemon"
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
          className="navbar-img"
        />
      </div>
      <div>
        <button className="nav-btn">Ir para Favoritos</button>
      </div>
    </nav>
  );
};

export default Navbar;
