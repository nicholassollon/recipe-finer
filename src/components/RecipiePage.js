import React, {useState, useEffect} from 'react';
import RecipieCollection from './RecipieCollection';

function RecipiePage() {
    const[recipies, setRecipies] = useState([])

useEffect(() => {
    fetch('http://localhost:3004/recipes')
    .then(r => r.json())
    .then(data => setRecipies(data))
}, [])



return (
    <div>
    <main>
        <RecipieCollection recipies = {recipies} />

    </main>
    </div>
);
}

export default RecipiePage;
