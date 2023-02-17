import React from "react";
import "../RecipieCard.css"
import { Link } from "react-router-dom"

function RecipieCard({recipie, id}) {
    return (
    <div className="card"><Link to={`recipes/${id}` }>
        <img
            src={recipie.image}
            alt={recipie.name}
            className="recipie-image"
        />
        <p>{recipie.name}</p></Link>
        {/* <p>{recipie.ingredients} Ingredients </p>
        <p>{recipie.recipie}</p>
        <p> {recipie.allergens}</p> */}
    </div>
    );
}

export default RecipieCard;
