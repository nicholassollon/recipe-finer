import React from "react";
import "../RecipieCard.css"
import { Link } from "react-router-dom"

const linkStyle= { 
    textDecoration: "none"
}
function RecipieCard({recipie, id}) {
    return (
    <div className="card"><Link to={`recipes/${id}` } style={linkStyle}>
        <img
            src={recipie.image}
            alt={recipie.name}
            className="recipie-image"
        />
        <p className='nameLink'>Name: {recipie.name}</p>
        </Link>
        {/* <p>{recipie.ingredients} Ingredients </p>

        <p>{recipie.recipie}</p>
        <p> {recipie.allergens}</p> */}
    </div>
  );
}

export default RecipieCard;
