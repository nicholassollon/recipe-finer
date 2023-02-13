import React from 'react';
import useState from "react"

function Form() {
    const [ingredients, updateIngredients] = useState([]);

    function addIngredients(newIngredient) {
        updateIngredients(...ingredients, newIngredient);
    }

    return <div>
        
    </div>
}

export default Form;