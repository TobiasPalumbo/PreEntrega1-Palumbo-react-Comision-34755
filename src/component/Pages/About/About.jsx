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
          <div className='contain-logos-tecnologys'>
          <h4>Technologies</h4>
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
          <div>
        <figure className='figure'>
          <a href="https://tobiaspalumbo.github.io/CODER-HOUSE-JS/" target={"_blank"}>
             <img className='img-figure' src="https://cdn.discordapp.com/attachments/1002620128489394276/1034648958024290314/unknown.png" alt="" />
          </a>
          </figure>
          <div  className='contain-logos-tecnologys' >
            <h4>Technologies</h4>
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
        </div>
        <div className='skill-learning-contact-container '>
          <div className='left-section'>
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
          <div className='skills-wrapper'>
            <h4>
              Learning
            </h4>
            <div className='wrapper-logos-tecnologys'>
              <span>
                <img  className='img-logo-about ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/600px-Typescript_logo_2020.svg.png" alt="" />
              </span>
              <span>
                <img  className='img-logo-about angular-logo' src="https://mir-s3-cdn-cf.behance.net/projects/404/7b77c5101879301.Y3JvcCwxMjAwLDkzOCwwLDEzMA.png" alt="" />
              </span>
            </div>
          </div>
          <div className='contain-logos-tecnologys git-hub'>
              <h4>Contact me</h4>
              <div className='wrapper-logos-tecnologys  '>
                <span>
                  <img className='img-logo-about' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                </span>
                <span>
                 <img className='img-logo-about' src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" />
                </span>
                <span>
                  <img  className='img-logo-about' src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
                </span>
              </div>
          </div>
          </div>  
          <div className='right-section'>
            <span>
              <img src="https://cdn.discordapp.com/attachments/709560217507201096/1036043113451499610/unknown.png" alt="" />
            </span>
            <h4>Tobias Palumbo</h4>
          </div>
        </div>
      </div>
      
    );
}

export default About;
