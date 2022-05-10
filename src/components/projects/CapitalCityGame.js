import React from "react";
import ProjectsHeader from "../ProjectsHeader";
import github_logo from "../../logos/git-alt-brands.svg";
import Main_Game from "../../logos/projects_photos/capital_city_game/Main_Game.png";
import Lost_Game from "../../logos/projects_photos/capital_city_game/Lost_Game.png";
import End_Game from "../../logos/projects_photos/capital_city_game/End_Game.png";
import Bad_Answer from "../../logos/projects_photos/capital_city_game/Bad_Answer.png";
import New_Best_Score from "../../logos/projects_photos/capital_city_game/New_Best_Score.png";
import Good_Answer from "../../logos/projects_photos/capital_city_game/Good_Answer.png";
import Footer from "../Footer";

const CapitalCityGame = () => {
  return (
    <section
      id="Capital_City_Game"
      title="Capital_City_Game"
      className="container"
    >
      <ProjectsHeader />
      <div className="project__content">
        <h2 className="section__title">Capital City Game</h2>
        <div className="project__description">
          <div className="project__box">
            <h3 className="project__section__title">Technology Used</h3>
            <ul>
              <li>React</li>
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
                This is a quiz game for children to practice their knowledge of
                the capitals cities of the world. It works like popular quiz
                games, there is question and 4 potential answers, you can make
                two mistakes after third game is over web app is fully
                responsive best score is saved in local JSON server Design is
                very simple and colorful
              </p>
            </article>
          </div>
          <div className="project__box">
            <h3 className="project__section__title">link to GitHub</h3>
            <a href="https://github.com/misiekmardosz/CapitalCityGame">
              <img src={github_logo} alt="css_logo" className="brand__logo" />
            </a>
          </div>
        </div>
        <h2 className="section__title">Screenshots</h2>
        <div className="project__photos">
          <img src={Main_Game} className="project__img" />
          <img src={Bad_Answer} className="project__img" />
          <img src={Good_Answer} className="project__img" />
          <img src={Lost_Game} className="project__img" />
          <img src={New_Best_Score} className="project__img" />
          <img src={End_Game} className="project__img" />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CapitalCityGame;
