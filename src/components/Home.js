import React from 'react'

import About from './About'
import Nav from './Nav'
// import Search from './Search'



function Home() {
    return(
        <div className='Home'>
            <Nav />
            <About />
            {/* <img className = "pink" src="https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png" alt="pink" /> */}
        </div>
    )
}




export default Home;