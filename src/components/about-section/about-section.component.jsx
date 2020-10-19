import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "../custom-button/custom-button.component";
import "./about-section.styles.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ heading, subtitle }) => {
  let aboutSectionImage = useRef(null);
  let aboutSectionContent = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: false,
      },
    });
    tl.from(aboutSectionImage, 1, {
      x: 200,
      autoAlpha: 0,
      delay: 1,
      ease: "power3.In",
    }).from(
      aboutSectionContent,
      {
        x: -200,
        autoAlpha: 0,
        ease: "power3.In",
      },
      "-=0.5"
    );
    gsap.to(aboutSectionImage, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={(con) => {
        container = con;
      }}
    >
      <section class="about">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            ref={(section) => {
              aboutSectionContent = section;
            }}
          >
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {heading}
            </h1>
            <p class="mb-8 leading-relaxed">{subtitle}</p>
            <div class="flex justify-center">
              <CustomButton isPrimary>Learn More</CustomButton>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              ref={(section) => {
                aboutSectionImage = section;
              }}
              class="object-cover object-center rounded img"
              alt="hero"
              src={require("../../images/TECHNOBIT 18 (282).JPG")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
