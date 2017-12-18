import React from 'react';

const IngredientList = function(props){
    console.log(props);
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>{item.id}</li>
            ))}
        </ul>
    ) 
}

export default IngredientList;