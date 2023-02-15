import React from "react";



function RecipieCard({recipie}) {
    return (
    <div className="card">
        <p>{recipie.name}</p>
        <img
            src={recipie.image}
            alt={recipie.name}
            className="recipie-image"
        />
        <p>{recipie.ingredients} Ingredients </p>
        <p>{recipie.recipie}</p>
        <p> {recipie.allergens}</p>
    </div>
    );
}

export default RecipieCard;
