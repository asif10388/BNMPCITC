import React, { useRef, useEffect } from "react";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "../../../components/custom-button/custom-button.component";
import "./about-hero.styles.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = ({ heading, subtitle }) => {
  let heroLogo = useRef(null);
  let heroHeader = useRef(null);
  let heroSubtitle = useRef(null);

  useEffect(() => {
    var tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(heroLogo, 1, {
      delay: 1,
      scale: 0.75,

      autoAlpha: 0,
      ease: Power3.easeOut,
    })
      .from(heroHeader, 1, {
        y: 100,
        autoAlpha: 0,
        ease: Power3.easeOut,
      })
      .from(heroSubtitle, 1, {
        y: 100,
        autoAlpha: 0,
        ease: Power3.easeOut,
      });

    gsap.from(heroHeader, 1, {
      y: 100,
      autoAlpha: 0,
      ease: Linear.easeNone,
    });

    gsap.from(heroSubtitle, 1, {
      y: 100,
      autoAlpha: 0,
      ease: Linear.easeNone,
    });
  }, []);

  function scaleUp() {
    gsap.to(heroLogo, 1, {
      scale: 1.25,
      ease: Power3.easeOut,
    });
  }

  function scaleDown() {
    gsap.to(heroLogo, 1, {
      scale: 1,
      ease: Power3.easeOut,
    });
  }

  return (
    <div className="bg-hero">
      <section>
        <div class="container mx-auto flex px-5 py-18 mb-4 items-center justify-center flex-col">
          <img
            alt="hero"
            src="https://jesmachi.sirv.com/bnmpcitc/Official%20Logo.png"
            width="256px"
            height="256px"
            onMouseEnter={scaleUp}
            onMouseLeave={scaleDown}
            className="heroLogo"
            ref={(logo) => {
              heroLogo = logo;
            }}
          />
          <div class="text-center text-white lg:w-2/3 w-full">
            <h1
              class=" sm:text-4xl text-3xl mb-4 font-medium"
              ref={(header) => {
                heroHeader = header;
              }}
            >
              {heading}
            </h1>
            <p
              class="mb-8 leading-relaxed"
              ref={(subtitle) => {
                heroSubtitle = subtitle;
              }}
            >
              {subtitle}
            </p>
            <div class="flex justify-center py-4 mb-24">
              <CustomButton isSecondary>Know Us</CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
