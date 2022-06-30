import React from 'react'

export default function CardPokedex(props){
    const { name } = props.data;

    return(
        <>
          { name }  
        </>
    )
}