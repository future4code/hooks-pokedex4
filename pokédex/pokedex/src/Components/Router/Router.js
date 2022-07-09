import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaPrincipal from '../../PaginaPrincipal'
import PokedexPage from '../PokedexPage/PokedexPage'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<PaginaPrincipal />} />
                <Route path = {'pokedex/pokemons'} element = { <PokedexPage />} />
            </Routes>
        </BrowserRouter>
    )
}