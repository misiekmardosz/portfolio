import React from "react"
import {Link} from "react-router-dom";

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const ProjectsHeader = () => {
  return(
      <div className={"header container"}>
          <h2>MICHAŁ MARDOSZ</h2>
        <nav className="nav">
            <Link to={"/"} className="nav__link__home">HOME</Link>
        </nav>
      </div>
  )
}

export default ProjectsHeader