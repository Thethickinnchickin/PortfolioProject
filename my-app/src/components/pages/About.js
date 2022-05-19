import React from 'react';
import '../../App.css';
import './About.css';


function About () {
    return (
        
            <div className='about-main-container'>
                <div>
                    <h1 className="title mt-3">I build value by design.</h1>
                    <p className="paragraph content-paragraph">
                        I’m Matthew Reiley, but you can call me Matt
                    </p>
                    <p className="paragraph content-paragraph">
                        Born and raised in the Bay Area I have been honing in my skills as a web developer from designing databases to building frontend designs I have done it all.
                    </p>                    


                    <p className="paragraph content-paragraph">
                        For the past 5 years I have been honing my skills in programming and specifically web development.
                        Begginging with making simple games like tetris using javascript all the way to making a fully functional ecommers site with full security. 
                        <br></br>
                        
                        
                    </p>
                    <p className='paragraph content-paragraph'>
                    My goal is to make user friendly websites that make the experiences as pain free as possible. 
                    </p>
                        
                    <p className="paragraph content-paragraph">
                        Have an interesting project?&nbsp;<a href="/contact" className="link">Let's talk</a>.
                    </p>  
                </div>
            </div>

    
    )
}

export default About;