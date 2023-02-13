import React from 'react';
import { useState } from "react"
import Ingredient from "./Ingredient.js";

function Form() {
    const [recipe, updateRecipe] = useState("");
    const [name, updateName] = useState("");
    const [inputList, addInput] = useState([<Ingredient class="ingredient"></Ingredient>]);

    function handleRecipe(recipe) {
        updateRecipe(recipe.target.value);
    }
    function handleName(name) {
        updateName(name.target.value);
    }
    function handleInput() {
        addInput([...inputList, <Ingredient class="ingredient"></Ingredient>]);
    }

    function handleSubmit(){
        
    }

    return (<div>
        <label>
            Recipe Name
            <input
                name="recipeName"
                type="text"
                onChange={handleName}
                value={name} />
        </label>
        <button onClick={handleInput}>Add Ingredient</button>
        <div>{inputList}</div>
        <label>
            Recipe
            <input
                name="recipe"
                type="text"
                onChange={handleRecipe}
                value={recipe} />
        </label>
    </div>)

}

export default Form;