import { findAllByTestId } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import RecipieCollection from './RecipieCollection';
import Search from './Search';

 //[peanuts, fish, shellfish, dairy, soy, gluten, egg]

function RecipiePage() {
    const[recipies, setRecipies] = useState([])

    const[search, setSearch] = useState ('')

    const filteredRecipies = recipies.filter(recipie => recipie.name.toLowerCase().includes(search.toLowerCase()))

    const [isChecked, setIsChecked] = useState(false)



useEffect(() => {
    fetch('http://localhost:3004/recipes')
    .then(r => r.json())
    .then(data => setRecipies(data))
}, [])






return (
    <div>
        <main>
            <Search search = {search} setSearch= {setSearch} setIsChecked= {setIsChecked}/>
            <RecipieCollection recipies = {filteredRecipies} />  

            <div>
                <input onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="peanut" value="peanut" />
                <label for="peanut">Peanut</label>
                <input onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="fish" value="fish" />
                <label for="fish">Fish</label>
                <input onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="shellfish" value="shellfish" />
                <label for="shellfish">Shellfish</label>
                <input onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="dairy" value="dairy" />
                <label for="dairy">Dairy</label>
                <input onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="soy" value="soy" />
                <label for="soy">Soy</label>
                <input onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="gluten" value="gluten" />
                <label for="gluten">Gluten</label>
                <input onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="egg" value="egg" />
                <label for="egg">Egg</label>  
            </div>
        </main>
    </div>
);
}

export default RecipiePage;
