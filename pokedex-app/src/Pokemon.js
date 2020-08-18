import React from 'react';

function Pokemon ({pokemonData}) {
    return (
        <div className="Pokemon">
            <div className="PokemonName">{pokemonData.name + '  #' + pokemonData.id}</div>
            <div className="PokemonImage">
                <img src={pokemonData.sprites.front_default}></img>
            </div>
        </div>
    );
}

export default Pokemon ;