import React, {useState, useEffect} from 'react';
import RecipieCollection from './RecipieCollection';
import Search from './Search';
import '../RecipiePage.css'


function RecipiePage() {
  const [recipies, setRecipies] = useState([]);

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
            <Search class="search" search = {search} setSearch= {setSearch} setIsChecked= {setIsChecked}/>
            <RecipieCollection recipies = {filteredRecipies} />  
            <div>
                <input class="peanut3" onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="peanut" value="peanut" />
                <label class="peanut4" for="peanut">Peanut</label>
                <input class="fish3" onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="fish" value="fish" />
                <label class="fish4" for="fish">Fish</label>
                <input class="shellfish3" onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="shellfish" value="shellfish" />
                <label class="shellfish4" for="shellfish">Shellfish</label>
                <input class="dairy3" onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="dairy" value="dairy" />
                <label class="dairy4" for="dairy">Dairy</label>
                <input class="soy3" onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="soy" value="soy" />
                <label class="soy4" for="soy">Soy</label>
                <input class="gluten3" onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="gluten" value="gluten" />
                <label class="gluten4" for="gluten">Gluten</label>
                <input class="egg3" onChange= {(e) => setIsChecked(e.target.checked)} type="checkbox" name="egg" value="egg" />
                <label class="egg4" for="egg">Egg</label>  
            </div>

        </main>

    </div>
  );
}

export default RecipiePage;
