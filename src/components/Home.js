import React from 'react'

import About from './About'
import Nav from './Nav'
import Search from './Search'



function Home() {
    return(
        <div className='Home'>
            <Nav />
            <Search />
            <About />

        </div>
    )
}




export default Home;