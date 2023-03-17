import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>   
           <h1>A propos</h1>
           <br/>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Libero quidem at laborum dolorum illo porro quisquam explicabo qui veniam eveniet voluptate
              dolorem optio dicta, reiciendis doloribus consequuntur molestiae voluptatem sint.</p> 
        </div>
    );
};

export default About;