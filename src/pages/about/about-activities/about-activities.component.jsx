import React, { useRef, useEffect, createRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./about-activities.styles.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutActivities = ({ heading, subtitle }) => {
  let aboutSectionImage = useRef(null);
  let container = useRef(null);
  let svgRef = useRef([]);
  let textRef = useRef([]);
  let lineRef = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: false,
      },
    });
    tl.staggerFrom(
      svgRef.current,
      1,
      { delay: 0.8, scale: 0, ease: "power3.In" },
      0.3
    )
      .staggerFrom(
        lineRef.current,
        1,
        { delay: 0.8, height: 0, ease: "power3.In" },
        0.3,
        "-=3"
      )
      .staggerFrom(
        textRef.current,
        1,
        {
          x: 110,
          autoAlpha: 0,
          ease: "power3.In",
        },
        0.3,
        "-=2"
      )
      .from(
        aboutSectionImage,
        2,
        {
          scale: 0.25,
          delay: 0.8,
          autoAlpha: 0,
          ease: "power3.In",
        },
        "-=3.2"
      );
  }, []);

  return (
    <section
      ref={(con) => {
        container = con;
      }}
    >
      <div class="container px-5 py-24 mx-auto flex flex-col flex-wrap">
        <h1 class="sm:text-4xl text-3xl mb-12 text-center">{heading}</h1>
        <div class="flex flex-wrap w-full justify-center items-center">
          <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div
                  class="h-full w-1 bg-gray-400 pointer-events-none"
                  ref={(element) => {
                    lineRef.current[0] = element;
                  }}
                ></div>
              </div>
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-green-400 inline-flex items-center justify-center text-white relative z-10"
                ref={(element) => {
                  svgRef.current[0] = element;
                }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div
                class="flex-grow pl-4"
                ref={(element) => {
                  textRef.current[0] = element;
                }}
              >
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Technobit 2018
                </h2>
                <p class="leading-relaxed">
                  Our first ever hosted intra technology fest. It marked the
                  inception of our club's journey
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div
                  class="h-full w-1 bg-gray-400 pointer-events-none"
                  ref={(element) => {
                    lineRef.current[1] = element;
                  }}
                ></div>
              </div>
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-green-400 inline-flex items-center justify-center text-white relative z-10"
                ref={(element) => {
                  svgRef.current[1] = element;
                }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div
                class="flex-grow pl-4"
                ref={(element) => {
                  textRef.current[1] = element;
                }}
              >
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Technobit 2.0
                </h2>
                <p class="leading-relaxed">
                  The successor of Technobit 2018. It was more grandiose, more
                  spectacular, and more everything.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div
                  class="h-full w-1 bg-gray-400 pointer-events-none"
                  ref={(element) => {
                    lineRef.current[2] = element;
                  }}
                ></div>
              </div>
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-green-400 inline-flex items-center justify-center text-white relative z-10"
                ref={(element) => {
                  svgRef.current[2] = element;
                }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div
                class="flex-grow pl-4"
                ref={(element) => {
                  textRef.current[2] = element;
                }}
              >
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Benchmark 2020
                </h2>
                <p class="leading-relaxed">
                  The online fest that is underway and ready to give you a taste
                  of adrenaline.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div
                  class="h-full w-1 bg-gray-400 pointer-events-none"
                  ref={(element) => {
                    lineRef.current[3] = element;
                  }}
                ></div>
              </div>
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-red-400 inline-flex items-center justify-center text-white relative z-10"
                ref={(element) => {
                  svgRef.current[3] = element;
                }}
              >
                <svg
                  height="512pt"
                  viewBox="0 0 512 512"
                  width="512pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                    fill="#FC8181"
                  />
                  <path
                    d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                    fill="#fafafa"
                  />
                </svg>
              </div>
              <div
                class="flex-grow pl-4"
                ref={(element) => {
                  textRef.current[3] = element;
                }}
              >
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Club Dying till 20Infinity
                </h2>
                <p class="leading-relaxed">
                  With the departure of the successor team, there is none to
                  uplaod the club legacy. So the club has started to fade into
                  the abyss
                </p>
              </div>
            </div>
            <div class="flex relative">
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-red-400 inline-flex items-center justify-center text-white relative z-10"
                ref={(element) => {
                  svgRef.current[4] = element;
                }}
              >
                <svg
                  height="512pt"
                  viewBox="0 0 512 512"
                  width="512pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                    fill="#FC8181"
                  />
                  <path
                    d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                    fill="#fafafa"
                  />
                </svg>
              </div>
              <div
                class="flex-grow pl-4"
                ref={(element) => {
                  textRef.current[4] = element;
                }}
              >
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Officially Dead
                </h2>
                <p class="leading-relaxed">Lalalalalala</p>
              </div>
            </div>
          </div>
          <img
            class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 activity-img"
            src="https://jesmachi.sirv.com/bnmpcitc/gallery/activity.jpg"
            alt="step"
            ref={(section) => {
              aboutSectionImage = section;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutActivities;
