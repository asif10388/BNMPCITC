import React, { useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.styles.scss";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ heading, subtitle }) => {
  let heroLogo = useRef(null);
  let heroSection = useRef(null);
  let heroHeader = useRef(null);
  let heroSubtitle = useRef(null);
  let headerContent = useRef(null);

  useEffect(() => {
    var tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(heroHeader, 1, {
      delay: 1,
      y: 100,
      autoAlpha: 0,
      ease: Power3.easeOut,
    })
      .from(heroSubtitle, 1, {
        y: 100,
        autoAlpha: 0,
        ease: Power3.easeOut,
      })
      .from(heroLogo, 1, {
        scale: 0.75,
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

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: heroSection,
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    // });

    // gsap.utils.toArray(".parallax").forEach(layer => {
    //   const depth = layer.dataset.depth;
    //   const movement = -(layer.offsetHeight * depth)
    //   tl.to(layer, { y: movement, ease: "none" }, 0)
    // });
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
    <div
      className="hero"
      ref={(hero) => {
        heroSection = hero;
      }}
    >
      <section
        class="body-font"
        ref={(header) => {
          headerContent = header;
        }}
      >
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
            <h1
              class="title-font sm:text-4xl text-3xl mb-4 font-medium"
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
