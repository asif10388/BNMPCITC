import React from "react";
import "./about.styles.scss";

import AboutHero from "./about-hero/about-hero.component";
import AboutFeatures from "./about-features/about-features.component";
import AboutSection from "../../components/about-section/about-section.component";
import FullbleedImage from "../../components/fullbleed-image/fullbleed-image.component";
import AboutActivities from "./about-activities/about-activities.component";
import AboutTeam from "./about-team/about-team.component";

import PAGE_CONTENT from "../../content/page-content";

const About = () => (
  <div>
    <AboutHero
      heading={PAGE_CONTENT[4].contentHeading}
      subtitle={PAGE_CONTENT[4].contentDescription}
    />
    <AboutFeatures heading={PAGE_CONTENT[5].contentHeading} />
    <AboutSection
      heading={PAGE_CONTENT[6].contentHeading}
      subtitle={PAGE_CONTENT[6].contentDescription}
    />
    <FullbleedImage bgImage={require("../../images/wallmagazine.jpg")} />
    <AboutActivities heading={PAGE_CONTENT[7].contentHeading} />
    <AboutTeam />
  </div>
);

export default About;
