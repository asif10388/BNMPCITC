import React from "react";

import Hero from "../../components/hero/hero.component";
import AboutSection from "../../components/about-section/about-section.component";
import Features from "../../components/features/features.component";
import Schedule from "../../components/schedule/schedule.component";
import Register from "../../components/register/register.component";

import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <Hero />
    <AboutSection />
    <Features />
    <Schedule />
    <Register />
  </div>
);

export default Homepage;
