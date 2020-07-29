import React from "react";

import Hero from "../../components/hero/hero.component";
import AboutSection from "../../components/about-section/about-section.component";
import Features from "../../components/features/features.component";
import Schedule from "../../components/schedule/schedule.component";
import Register from "../../components/register/register.component";

import "./homepage.styles.scss";

import "../../content/page-content";
import PAGE_CONTENT from "../../content/page-content";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero
        heading={PAGE_CONTENT[0].contentHeading}
        subtitle={PAGE_CONTENT[0].contentDescription}
      />
      <AboutSection
        heading={PAGE_CONTENT[1].contentHeading}
        subtitle={PAGE_CONTENT[1].contentDescription}
      />
      <Features
        heading={PAGE_CONTENT[2].contentHeading}
        subtitle={PAGE_CONTENT[2].contentDescription}
      />
      <Schedule />
      <Register />
    </div>
  );
};

export default Homepage;
