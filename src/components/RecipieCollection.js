import React from "react";
import RecipieCard from "./RecipieCard"

function RecipieCollection({recipies}) {
    const recipieCards = recipies?.map((recipie) => { return (<RecipieCard recipie={recipie} key= {recipie.id}/>)} )


    return (
        <div> {recipieCards}</div>
    )
}

export default RecipieCollection;  