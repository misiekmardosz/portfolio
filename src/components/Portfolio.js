import React from "react";

const Portfolio = () => {
    return(
        <section id="Portfolio" title="Portfolio" className="portfolio container">
            <h2 className="section__title">Portfolio</h2>
            <div className="projects">
                <div className="projects__item">
                    <h3 className="project__title">Drinks Calculator</h3>
                </div>
                <div className="projects__item">
                    <h3 className="project__title">Best Shop Website</h3>
                </div>
                <div className="projects__item">
                    <h3 className="project__title">Capital City Game</h3>
                </div>
                <div className="projects__item">
                    <h3 className="project__title">Car Sharing Website</h3>
                </div>
            </div>
        </section>
    )
}

export default Portfolio