import React from "react";
import ProjectsHeader from "../ProjectsHeader";
import header from "../../logos/projects_photos/car_sharing/header.png";
import blog from "../../logos/projects_photos/car_sharing/blog.png";
import contact from "../../logos/projects_photos/car_sharing/contact.png";
import service from "../../logos/projects_photos/car_sharing/service.png";
import Footer from "../Footer";
import github_logo from "../../logos/git-alt-brands.svg";

const CarSharing = () => {
  return (
    <section id="Car_Sharing" title="Car_Sharing" className="container">
      <ProjectsHeader />
      <div className="project__content">
        <h2 className="section__title">Car Sharing</h2>
        <div className="project__description">
          <div className="project__box">
            <h3 className="project__section__title">Technology Used</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="project__box">
            <h3 className="project__section__title">Description</h3>
            <article>
              <p>
                Not responsive web design done on Coders Lab Bootcamp workshops,
                it was one of fist website created by me to learn how to build
                layouts. Car Sharing was created in html and styled in css
              </p>
            </article>
          </div>
          <div className="project__box">
            <h3 className="project__section__title">link to GitHub</h3>
            <a href="https://github.com/misiekmardosz/Car_sharing">
              <img src={github_logo} alt="css_logo" className="brand__logo" />
            </a>
          </div>
        </div>
        <h2 className="section__title">Screenshots</h2>
        <div className="project__photos">
          <img src={header} className="project__img" />
          <img src={blog} className="project__img" />
          <img src={service} className="project__img" />
          <img src={contact} className="project__img" />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CarSharing;
