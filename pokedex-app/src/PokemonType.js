import React from 'react';

function PokemonType (props) {
    return (
        <li
            onClick={()=>props.onClick()}
        >
            {props.pokemonName}
        </li>
    );
}

export default PokemonType ; 