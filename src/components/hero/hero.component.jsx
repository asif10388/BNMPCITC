import React, { useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { TweenMax, Power3, gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.styles.scss";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ heading, subtitle }) => {
  let heroLogo = useRef(null);
  let heroSection = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(heroLogo, 0.2, { y: 18 }, { y: -18, yoyo: true, repeat: -1 });
  // }, []);

  // useEffect(() => {
  //   TweenMax.to(heroLogo, 1, {
  //     repeat: -1,
  //     rotation: 360,
  //     ease: Linear.easeNone,
  //   });
  // }, []);

  function scaleUp() {
    TweenMax.to(heroLogo, 1, {
      scale: 1.25,
      ease: Power3.easeOut,
    });
  }

  function scaleDown() {
    TweenMax.to(heroLogo, 1, {
      scale: 1,
      ease: Power3.easeOut,
    });
  }

  return (
    <div className="hero" ref={heroSection}>
      <section class="body-font">
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
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
              {heading}
            </h1>
            <p class="mb-8 leading-relaxed">{subtitle}</p>
            <div class="flex justify-center py-4">
              <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                <ScrollLink
                  activeClass="active"
                  to="register"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Register!
                </ScrollLink>
              </button>

              <button class="ml-4 inline-flex text-gray-900 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                <ScrollLink
                  activeClass="active"
                  to="schedule"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Schedule
                </ScrollLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
