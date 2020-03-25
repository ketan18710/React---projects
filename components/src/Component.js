import React from 'react';

function Component(props)
{
    console.log(props.children)
    return(
         <div>
             {/* hhhh */}
             <h1>Component 1: </h1>{props.c1}
             <h1>Component 2: </h1>{props.children[0]}
         </div>
    )
}

export default Component