import React, { useRef, useEffect } from "react";
import {
  faPaintBrush,
  faGamepad,
  faCode,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap, Power1 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about-features.styles.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutFeatures = ({ heading, subtitle }) => {
  let feature1 = useRef(null);
  let feature2 = useRef(null);
  let feature3 = useRef(null);
  let feature4 = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: false,
        //start: "-100px 100px", // when the top of the trigger hits the top of the viewport
        //end: "+=500", // end after scrolling 500px beyond the start
        //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
    tl.from(feature1, 1, { y: 80, autoAlpha: 0, ease: "power1.inOut" })
      .from(feature2, 1, { y: 80, autoAlpha: 0, ease: "power1.inOut" })
      .from(feature3, 1, { y: 80, autoAlpha: 0, ease: "power1.inOut" })
      .from(feature4, 1, { y: 80, autoAlpha: 0, ease: "power1.inOut" });
  }, []);

  return (
    <div
      ref={(con) => {
        container = con;
      }}
    >
      <section>
        <div class="container py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-4xl text-3xl mb-4">{heading}</h1>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap lg:flex-no-wrap sm:m-2 mx-2">
            <div
              class="p-4 lg:w-1/4 md:mb-0 m-2 flex flex-col text-center items-center custom-shadow"
              ref={(feature) => {
                feature1 = feature;
              }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <FontAwesomeIcon icon={faRobot} size="2x" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Robotics
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div
              class="p-4 lg:w-1/4 md:mb-0 m-2 flex flex-col text-center items-center custom-shadow"
              ref={(feature) => {
                feature2 = feature;
              }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <FontAwesomeIcon icon={faCode} size="2x" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Web Development
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div
              class="p-4 lg:w-1/4 md:mb-0 m-2 flex flex-col text-center items-center custom-shadow"
              ref={(feature) => {
                feature3 = feature;
              }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <FontAwesomeIcon icon={faPaintBrush} size="2x" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Graphics Design
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div
              class="p-4 lg:w-1/4 md:mb-0 m-2 flex flex-col text-center items-center custom-shadow"
              ref={(feature) => {
                feature4 = feature;
              }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <FontAwesomeIcon icon={faGamepad} size="2x" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Gaming
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFeatures;
