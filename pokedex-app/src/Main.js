import React, { useState, useEffect } from 'react';
import SearchPokemon from './SearchPokemon.js';
import Pokemon from './Pokemon.js';
import TypeList from './TypeList.js';
import axios from 'axios';

function Main () {
    const [pokemonData , setPokemonData] = useState();
    // const [typeList , setTypeList] = useState();
    const [pokemonsType , setPokemonsType] = useState();

    // pokemonData !== undefined &&
    // setTypeList(pokemonData.types.map(type=>type));
    useEffect(()=>{
        setPokemonsType()
    },[pokemonData]);

    async function GetPokemon (PokemonIDName) {
        try {
            const { data } = await axios.get(`http://pokeapi.co/api/v2/pokemon/${PokemonIDName}`);
            setPokemonData(data);
        } catch {
            console.log('No Pokemon Found');
        }
    }
    async function getPokemonsSameType(url) {
        const { data } = await axios.get(url);
        console.log(data.pokemon);
        setPokemonsType(data.pokemon);
    }
    return (
        <div className="Main">
            <SearchPokemon 
                onClick={GetPokemon}
            />
            { 
                pokemonData !== undefined &&
                <>
                <Pokemon pokemonData={pokemonData}/>
                <TypeList 
                    types={pokemonData.types.map(type=>type)}
                    pokemonsType={pokemonsType}
                    onClick={GetPokemon}
                    getPokemons={getPokemonsSameType}
                />
                </>
            }
        </div>
    );
}

export default Main ;