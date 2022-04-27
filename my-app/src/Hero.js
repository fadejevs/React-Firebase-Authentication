import React from 'react';

const Hero = ({handleLogout}) => { 
    return(

        <section>
            <nav>
                <h2>Welcome</h2>
                <button onClick={ handleLogout }>Log Out</button>
            </nav>
        </section>
    )
}



export default Hero;