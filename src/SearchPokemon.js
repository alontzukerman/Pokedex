import React, { useState } from 'react';

function SearchPokemon ({onClick}) {
    const [inputValue , setInputValue] = useState('');
    return (
        <div className="SearchPokemon">
            <input 
                className="Input"
                onChange={(e)=> onClick(e.target.value)  && setInputValue(e.target.value)}
                placeholder="Search Pokemon"></input>
            {/* <button 
                className="Button"
                onClick={(e)=>inputValue !== '' && onClick(inputValue)}
            > 
                Search 
            </button> */}
        </div>
    );
}

export default SearchPokemon ;