import React from 'react'

function Nav(){
    return(
        <div className='Nav'>
            <section class="wrapper">
                <div class="top">Recipe Findr</div>
                <div class="bottom" aria-hidden="true">Recipe Findr</div>
            </section>
            
            <input type="checkbox" id="ham-menu" />
            <label for="ham-menu">
            <div class="hide-des">
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
            </div>
            </label>
        <div class="full-page-green"></div>
        <div class="ham-menu">
            <ul class="centre-text bold-text">
                <li>Home</li>
                <li>Recipes</li>
                <li>Add Your Own Recipe</li>
                <li>About</li>
            </ul>
        </div>
    </div>


    )
}





export default Nav;