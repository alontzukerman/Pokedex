import React from 'react';

function TypeName ({typeName,onClick}) {
    return (
    <li onClick={()=>onClick()}>{typeName}</li>
    );
}

export default TypeName ;