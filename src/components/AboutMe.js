import React from 'react';
import photo from '/Users/avi/Desktop/github/Week20/react-portfolio/src/assets/Screenshot3.png'


function AboutMe() {
    return(
    <div class= "row container card-panel" id ="aboutMe">
        <h2 class= "row center">About Me</h2>
        <div class="row aboutmesection">
            <img src={photo} class ="col s12 m4" id="avipic" alt="Photo of Avi"/>
            <p class = " col s12 m4">
                        I attended Texas A and M University where I majored in English and minored in Economics. I am currently enrolled in a
                        Coding Bootcamp at Rice University. When I finish the course, I hope to become a full stack Web Developer.
            </p>
        </div>
        </div>
    )
}

export default AboutMe
