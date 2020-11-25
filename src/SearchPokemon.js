import React, { useState } from 'react';

function SearchPokemon ({onClick}) {
    const [inputValue , setInputValue] = useState('');

    const handleClick = (e) => {
        e.stopPropagation();
        onClick(inputValue);
    }
    return (
        <div className="SearchPokemon">
            <input 
                className="Input"
                onChange={(e)=> /* onClick(e.target.value)  && */ setInputValue(e.target.value)}
                placeholder="Search Pokemon"></input>
            <button 
                className="Button"
                onClick={(e)=>inputValue !== '' && handleClick(e)}
            > 
                Search 
            </button>
        </div>
    );
}

export default SearchPokemon ;