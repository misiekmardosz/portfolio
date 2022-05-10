import React from "react";
import ProjectsHeader from "../ProjectsHeader";
import github_logo from "../../logos/git-alt-brands.svg";
import main_page from "../../logos/projects_photos/best_shop/main_page.png";
import contact from "../../logos/projects_photos/best_shop/contact.png";
import pricing from "../../logos/projects_photos/best_shop/pricing.png";
import numbers from "../../logos/projects_photos/best_shop/numbers.png";

const BestShop = () => {
  return (
    <section id="Best_Shop" title="Best_Shop" className="container">
      <ProjectsHeader />
      <div className="project__content">
        <h2 className="section__title">Best Shop</h2>
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
          <img src={main_page} className="project__img" />
          <img src={numbers} className="project__img" />
          <img src={pricing} className="project__img" />
          <img src={contact} className="project__img" />
        </div>
      </div>
    </section>
  );
};

export default BestShop;
