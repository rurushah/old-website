import React from "react";
import "./ProjectsCard.css";
import resumeRuchiShah from "./resume_ruchishah.pdf";

function ProjectsCard() {
    return (
        <div className="projects-card" id="projects">
            <h1>Projects</h1>
            <div className="projects-card_container">
                <div className="projects-card_wrapper">
                    <ul className="projects-card_item">
                        <p>This section is still under construction!
                        View my <a href={resumeRuchiShah} download="resume_ruchishah.pdf">
                                resume</a> instead
                       </p>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ProjectsCard
