import React from 'react'

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
                <li onClick={()=> navigate("/home")}>Home</li>
                <li onClick={()=> navigate("/recipes")}>Recipes</li>
                <li onClick={()=>navigate("/form")}>Add Your Own Recipe</li>
            </ul>
        </div>
    </div>


    )
}





export default Nav;