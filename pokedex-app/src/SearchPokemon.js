import React, { useState } from 'react';

function SearchPokemon ({onClick}) {
    const [inputValue , setInputValue] = useState('');
    return (
        <div className="SearchPokemon">
            <input 
                onChange={(e)=>setInputValue(e.target.value)}
                className="Input" 
                placeholder="Search Pokemon"></input>
            <button 
                onClick={()=>inputValue !== '' && onClick(inputValue)}
                className="Button"
            > 
                Search 
            </button>
        </div>
    );
}

export default SearchPokemon ;