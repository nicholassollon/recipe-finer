import React from "react";
import RecipieCard from "./RecipieCard"

function RecipieCollection({ recipies }) {

    const recipieCards = recipies?.map((recipie) => { return (<RecipieCard recipie={recipie} key={recipie.id} id={recipie.id} /> )})


    return (
        <div class="cardList"> {recipieCards}</div>
    )
}

export default RecipieCollection;  