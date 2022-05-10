import React from "react";
import ProjectsHeader from "../ProjectsHeader";
import addGlass from "../../logos/projects_photos/drinks_calculator/addGlass.png";
import addRecipe from "../../logos/projects_photos/drinks_calculator/addRecipe.png";
import mainPage from "../../logos/projects_photos/drinks_calculator/mainPage.png";
import recipeDetails from "../../logos/projects_photos/drinks_calculator/recipeDetails.png";

const DrinksCalculator = () => {
  return (
    <section
      id="Drinks_Calculator"
      title="Drinks_Calculator"
      className="container"
    >
      <ProjectsHeader />
      <div className="project__content">
        <div className="technology__used">
          <h2 className="section__title">Technology Used</h2>
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
      </div>
      <div className="project__description">
        <div className="description">
          <h2 className="section__title">Drinks Calculator</h2>
          <article>
            <p>
              This is a graduation project of CodersLab bootcamp.This is web app
              for counting recipes for drinks based on glass size and quantity,
              also you can save your recipes and glasses in database. App is
              design for mobile only but also works on desktop Design was
              invented by myself based on modern rules and current trends
            </p>
          </article>
        </div>
        <h2 className="section__title">Photos</h2>
        <div className="project__photos">
          <img src={addGlass} className="project__img" />
          <img src={addRecipe} className="project__img" />
          <img src={mainPage} className="project__img" />
          <img src={recipeDetails} className="project__img" />
        </div>
      </div>
    </section>
  );
};

export default DrinksCalculator;
