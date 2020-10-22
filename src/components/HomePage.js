import React from "react";
import "../App.css";
import Hero from "./Hero";
import Cards from "./Cards";
import AboutCard from "./AboutCard";
import ProjectsCard from "./ProjectsCard";
import Footer from "./Footer";


function HomePage() {
    return (
        <>
            <Hero />
            <AboutCard />
            <Cards />
            <ProjectsCard />
            <Footer />

        </>
    );
}

export default HomePage