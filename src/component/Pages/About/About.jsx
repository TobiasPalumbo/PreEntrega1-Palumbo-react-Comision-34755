import React from 'react';
import "./About.css"
const About = () => {


    return (
      <div>
        <div className='wrapper-title-about'>
          <h1>Hi there, my name is Tobias Palumbo</h1>
          <p>I am a Front-End Developer</p>
        </div>
        <h3 className='myProyects'>My proyects</h3>
        <div>
        </div>
        <div className='wrapper-figures'>
          <div>
          <figure className='figure'>
           <a href='https://tobiaspalumbo.github.io/Trabajo-CODER/index.html' target={"_blank"}>
              <img className='img-figure' src="https://cdn.discordapp.com/attachments/1002620128489394276/1034648632550502440/unknown.png" alt="" />
            </a>
          </figure>
          <div className='wrapper-logos-tecnologys'>
            <span>
              <img className='img-logo-about' src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="" />
            </span>
            <span>
              <img className='img-logo-about' src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="" />
            </span>
          </div>
          </div>  
          <div>
        <figure className='figure'>
          <a href="https://tobiaspalumbo.github.io/CODER-HOUSE-JS/" arget={"_blank"}>
             <img className='img-figure' src="https://cdn.discordapp.com/attachments/1002620128489394276/1034648958024290314/unknown.png" alt="" />
          </a>
          </figure>
          <div className='wrapper-logos-tecnologys'>
            <span>
              <img className='img-logo-about' src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="" />
            </span>
            <span>
              <img className='img-logo-about' src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="" />
            </span>
            <span>
              <img className='img-logo-about' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="" />
            </span>
          </div>
        </div>
        </div>
        <div className='skills-wrapper'>
        <h3>Skills</h3>
        <div className='wrapper-logos-skills'>
        <span>
            <img className='img-logo-about' src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="" />
        </span>
        <span>
          <img className='img-logo-about' src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="" />      
        </span>
        <span>
          <img className='img-logo-about' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="" />
        </span>
        <span>
          <img className='img-logo-about' src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
        </span>
        </div>
        </div>
        <h4>Lerning</h4>
        <span></span>
        <span></span>
        <h4>Contact me</h4>
        <span></span>
        <span></span>
      </div>
      
    );
}

export default About;
