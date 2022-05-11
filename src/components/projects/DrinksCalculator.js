import React from "react";
import ProjectsHeader from "../ProjectsHeader";
import addGlass from "../../logos/projects_photos/drinks_calculator/addGlass.png";
import addRecipe from "../../logos/projects_photos/drinks_calculator/addRecipe.png";
import mainPage from "../../logos/projects_photos/drinks_calculator/mainPage.png";
import recipeDetails from "../../logos/projects_photos/drinks_calculator/recipeDetails.png";
import Footer from "../Footer";
import github_logo from "../../logos/git-alt-brands.svg";

const DrinksCalculator = () => {
  return (
    <section
      id="Drinks_Calculator"
      title="Drinks_Calculator"
      className="container"
    >
      <ProjectsHeader />
      <div className="project__content">
        <h2 className="section__title">Drinks Calculator</h2>
        <div className="project__description">
          <div className="project__box">
            <h3 className="project__section__title">Technology Used</h3>
            <ul>
              <li>React</li>
              <li>React Modal</li>
              <li>Bootstrap</li>
              <li>JSON server</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="project__box">
            <h3 className="project__section__title">Description</h3>
            <article>
              <p>
                This is a graduation project of CodersLab bootcamp.This is web
                app for counting recipes for drinks based on glass size and
                quantity, also you can save your recipes and glasses in
                database. App is design for mobile only but also works on
                desktop Design was invented by myself based on modern rules and
                current trends
              </p>
            </article>
          </div>
          <div className="project__box">
            <h3 className="project__section__title">link to GitHub</h3>
            <a href="https://github.com/misiekmardosz/DrinksCalculator">
              <img src={github_logo} alt="css_logo" className="brand__logo" />
            </a>
          </div>
        </div>
        <h2 className="section__title">Screenshots</h2>
        <div className="project__photos">
          <img src={addGlass} className="project__img__vertical" />
          <img src={addRecipe} className="project__img__vertical" />
          <img src={mainPage} className="project__img__vertical" />
          <img src={recipeDetails} className="project__img__vertical" />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DrinksCalculator;
