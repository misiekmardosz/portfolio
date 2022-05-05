import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ProjectsHeader = () => {
  return (
    <div className={"header__projects container"}>
      <Link to={"/"} className="title__name__projects">
        MICHAŁ MARDOSZ
      </Link>
      <HashLink to={"/"} className="title__name__projects">
        Section three
      </HashLink>
      <nav className="nav__projects">
        <Link to={"/"} className="nav__link__projects">
          HOME
        </Link>
      </nav>
    </div>
  );
};

export default ProjectsHeader;
