import React from "react";
import {Link} from "react-router-dom";

const Portfolio = () => {
    return(
        <section id="Portfolio" title="Portfolio" className="portfolio container">
            <h2 className="section__title">Portfolio</h2>
            <div className="projects">
                <div className="projects__item">
                    <div className="projects__item__content">
                        <Link to="/Drinks_Calculator" className="project__title">Drinks Calculator</Link>
                    </div>
                </div>
                <div className="projects__item">
                    <div className="projects__item__content">
                        <Link to="/Best_Shop" className="project__title">Best Shop Website</Link>
                    </div>
                </div>
                <div className="projects__item">
                    <div className="projects__item__content">
                        <Link to="/Capital_City_Game" className="project__title">Capital City Game</Link>
                    </div>
                </div>
                <div className="projects__item">
                    <div className="projects__item__content">
                        <Link to="/Car_Sharing" className="project__title">Car Sharing Website</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio