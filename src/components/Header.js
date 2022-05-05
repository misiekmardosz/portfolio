import React from "react"
import {Link as Scroll} from "react-scroll";

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const Header = () => {
  return(
      <div className={"header container"}>
          <h2>MICHAŁ MARDOSZ</h2>
        <nav className="nav">
            <Scroll to={"home"} className="nav__link"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}>Home</Scroll>
          <Scroll to={"AboutMe"} className="nav__link"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}>AboutMe</Scroll>
          <Scroll to={"Technology"} className="nav__link"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}>Technology</Scroll>
          <Scroll to={"Portfolio"} className="nav__link"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}>Portfolio</Scroll>
          <Scroll to={"Contact"} className="nav__link"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}>Contact</Scroll>
        </nav>
      </div>
  )
}

export default Header