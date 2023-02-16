import React from 'react'
import {Link} from "react-router-dom"
function Nav(){

    function navigate(e) {
        window.history.pushState({}, "", e);
      }

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
                <Link to="/home">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/form">Submit Your Recipe</Link>
            </ul>
        </div>
    </div>


    )
}





export default Nav;