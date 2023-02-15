import React from 'react';
import { useState } from "react"
function Form() {
    //Form inputs to be posted
    const [recipe, updateRecipe] = useState("");
    const [name, updateName] = useState("");
    const [ingredients, updateIngredients] = useState([]);
    const [ingredient, updateIngredient] = useState("");
    const [image, updateImage] = useState("");
    const [allergens, updateAllergens] = useState([false, false, false, false, false, false, false])
    const [isLoading, updateIsLoading] = useState(false)
    //Functions to handle state, and form related events
    function handleIngredients() {
        if (ingredient.length > 0)
            updateIngredients([...ingredients, ingredient]);
    }
    function handleRecipe(recipe) {
        updateRecipe(recipe.target.value);
    }
    function handleName(name) {
        updateName(name.target.value);
    }
    function handleIngredient(e) {
        updateIngredient(e.target.value)
    }
    function handleImage(image) {
        updateImage(image.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        updateIsLoading(true);
        fetch("http://localhost:3004/recipes", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ingredients: ingredients,
                recipe: recipe,
                allergens: allergens,
                image: image,
                name: name
            })
        })
            .then((response) => {
                updateIsLoading(false);
            });
    }
    //[peanuts, fish, shellfish, dairy, soy, gluten, egg]
    //Allergen update function
    function handleAllergen(aller) {
        const newAllergens = [...allergens]
        newAllergens[aller] = !newAllergens[aller]
        updateAllergens(newAllergens);
    }
    //Prettying functions
    function displayIngredients() {
        const display = [];
        for (let i = 0; i < ingredients.length; i++)
            if (i !== ingredients.length - 1)
                display.push(ingredients[i] + ", ")
            else
                display.push(ingredients[i])
        return display
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
        <br /><br />
        <label>
            Recipe Picture
            <input
                name="image"
                type="text"
                onChange={handleImage}
                value={image} />
        </label>
        <br /><br />
        <div><label>
            Ingredient
            <input
                id="inputIngredient"
                name="ingredient"
                type="text"
                onChange={handleIngredient}
                value={ingredient} />
        </label>
            <p>Ingredients:{displayIngredients()}</p>
            <br /></div>
        <button onClick={handleIngredients}>Add Ingredient</button>
        <br /><br />
        {/* [peanuts, fish, shellfish, dairy, soy, gluten, egg] */}
        <p>Does your recipe or ingredients contain...</p><br />
        <input onClick={() => handleAllergen(0)} type="checkbox" name="peanut" value="peanut" />Peanut
        <input onClick={() => handleAllergen(1)} type="checkbox" name="fish" value="fish" />Fish
        <input onClick={() => handleAllergen(2)} type="checkbox" name="shellfish" value="shellfish" />Shellfish
        <input onClick={() => handleAllergen(3)} type="checkbox" name="dairy" value="dairy" />Dairy
        <input onClick={() => handleAllergen(4)} type="checkbox" name="soy" value="soy" />Soy
        <input onClick={() => handleAllergen(5)} type="checkbox" name="gluten" value="gluten" />Gluten
        <input onClick={() => handleAllergen(6)} type="checkbox" name="egg" value="egg" />Egg
        <br /><br />
        <label>
            Recipe
            <input
                name="recipe"
                type="text"
                onChange={handleRecipe}
                value={recipe} />
        </label>
        <br /><br />
        <button type="submit" onClick={handleSubmit}>Submit Recipe</button>
    </div>)
}
export default Form