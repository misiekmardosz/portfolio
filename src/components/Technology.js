import React from "react";
import css_logo from "../logos/css3-brands.svg";
import sass_logo from "../logos/sass-brands.svg";
import react_logo from "../logos/react-brands.svg";
import trello_logo from "../logos/trello-brands.svg";
import html_logo from "../logos/html5-brands.svg";
import js_logo from "../logos/js-brands.svg";
import git_logo from "../logos/git-alt-brands.svg";

const Technology = () => {
  return (
    <section
      id="Technology"
      title="Technology"
      className="technology container"
    >
      <h2 className="section__title">Technology</h2>
      <div className="brands">
        <img className="brand_logo" src={css_logo} alt="css_logo"></img>
        <img className="brand_logo" src={react_logo} alt="css_logo" />
        <img className="brand_logo" src={html_logo} alt="css_logo" />
        <img className="brand_logo" src={sass_logo} alt="css_logo" />
        <img className="brand_logo" src={git_logo} alt="css_logo" />
        <img className="brand_logo" src={trello_logo} alt="css_logo" />
        <img className="brand_logo" src={js_logo} alt="css_logo" />
      </div>
    </section>
  );
};

export default Technology;
