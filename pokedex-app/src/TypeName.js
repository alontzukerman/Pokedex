import React from 'react';

function TypeName ({typeName,onClick}) {
    return (
    <button className="Button" onClick={()=>onClick()}>{typeName}</button>
    );
}

export default TypeName ;