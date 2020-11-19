import React from 'react';
import TypeName from './TypeName.js';
import PokemonType from './PokemonType';

function TypeList ({types,pokemonsType,onClick,getPokemons}) {
    console.log(pokemonsType);

    return (
        <div className="TypesContainer">
            <div className="TypesName">
            {
                types !== undefined &&
                types.map((type,i)=>{
                    return (
                        <TypeName 
                            key={i}
                            typeName={type.type.name}
                            onClick={()=>getPokemons(type.type.url)}/>
                    );
                })
            }
            </div>
            <div className="PokemonsName">
            {
                pokemonsType !== undefined &&
                pokemonsType.map((pokemon,i)=>{
                    return (
                        <PokemonType 
                            key={i}
                            pokemonName={pokemon.pokemon.name}
                            onClick={()=>onClick(pokemon.pokemon.name)}/>
                    );
                })
            }
            </div>
        </div>
    );
}

export default TypeList ;