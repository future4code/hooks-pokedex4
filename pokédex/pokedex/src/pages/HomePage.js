import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function HomePage(){
  const [pokes, setPokes] = useState([])

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon'

    axios.get(url).then((response) => {
      setPokes(response.data.results)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const dadosPoke = pokes.map((dados) => {
    return(
      <>
        <CardPokemons dados = { dados } />
      </>
    )
  })
  return(
    <>
      <h1> HomePage </h1>
      { dadosPoke }
    </>
  )
}