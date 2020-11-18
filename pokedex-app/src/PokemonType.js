import React from 'react';

function PokemonType (props) {
    return (
        <span
            className="PokemonType"
            onClick={()=>props.onClick()}
        >
            {props.pokemonName}
        </span>
    );
}

export default PokemonType ; 