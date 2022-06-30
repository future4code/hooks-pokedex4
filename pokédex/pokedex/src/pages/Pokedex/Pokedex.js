import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardPokedex from './CardPokedex';

export default function Pokedex(){
    const [pokeAdd, setPokeAdd] = useState([{}]);
    const [urls, setUrls] = useState([])

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon/'

        axios.get(url).then((response) => {
            setPokeAdd(response.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    
    const cardPokemons = pokeAdd.map((item) => {
        return (
            <div key = { item.url }>
                <CardPokedex data = { item } />
            </div>
        )
    })
    return (
        <>
            <h1>Pokemons Adicionados</h1>
            { cardPokemons }
        </>
    )
}