import React from "react";
import {useState} from "react";

function Ingredient() {

    const [ingredient, updateIngredient] = useState("");

    function handleIngredient(input) {
        updateIngredient(input);
    }

    return( 
    <React.Fragment>
        <label>
            Ingredient
            <input
            name="ingredient"
            type="text"
            onChange={handleIngredient}
            value = {ingredient} />
        </label>
        <p>{ingredient}</p>
            <br />
    </React.Fragment>
    )
}

export default Ingredient;