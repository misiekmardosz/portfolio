import React from "react";
import photoMyself from "../logos/Negative0-26-26A(1).jpg"

const AboutMe = () => {
  return(
      <section id="AboutMe" title="AboutMe" className="about-me container">
          <h2 className="section__title">About Me</h2>
          <div className="about-me-content">
              <div className="about-me-text">
                  <p>I am a novice programmer who has recently graduated from CodersLab bootcamp
                      and want to broaden my knowledge related to frontend development</p>
                  <p>I created projects on my own and in a team always emphasized logic, simplicity, and readability</p>
                  <p>Currently I am developing websites and web apps and i'm familiar with the React library, the latest JavaScript standards</p>
                  <p>In the past, I was involved in video production and graphic design, so I have an understanding of aesthetics and
                      user experience</p>
              </div>
              <img src={photoMyself} alt="photo_of_myself"/>
          </div>

      </section>
  )
}

export default AboutMe