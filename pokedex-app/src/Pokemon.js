import React from 'react';

function Pokemon ({pokemonData}) {
    return (
        <div className="Pokemon">
            <div>{pokemonData.id}</div>
            <div>{pokemonData.name}</div>
            <div>
                <img src={pokemonData.sprites.front_default}></img>
            </div>
        </div>
    );
}

export default Pokemon ;