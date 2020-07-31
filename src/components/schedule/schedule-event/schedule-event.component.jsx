import React, { useRef, useEffect } from "react";
import "./schedule-event.styles.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScheduleEvent = ({ eventTime, eventName, description }) => {
  let eventCard = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: false,
        // start: "top top", // when the top of the trigger hits the top of the viewport
        // end: "+=100", // end after scrolling 500px beyond the start
        // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
    tl.from(eventCard, 1, {
      y: 100,
      delay: 0.5,
      autoAlpha: 0,
      // stagger: 1.6,
      ease: "power3.In",
    });
  }, []);

  return (
    <div
      ref={(con) => {
        container = con;
      }}
    >
      <section>
        <div
          class="container px-5 py-6 mx-auto text-white"
          ref={(section) => {
            eventCard = section;
          }}
        >
          <div class="flex lg:flex-no-wrap text-center items-center custom-wrap custom-css-shadow card">
            <div class="p-4 lg:w-1/4 w-full">
              <p class="leading-relaxed sm:text-3xl text-xl">{eventTime}</p>
            </div>
            <div class="p-4 lg:w-1/4 w-full">
              <p class="leading-relaxed sm:text-4xl text-4xl">{eventName}</p>
            </div>
            <div class="p-4 lg:w-1/4 w-full">
              <p class="leading-relaxed sm:text-xl">{description}</p>
            </div>
            <div class="p-4 lg:w-1/4 w-full">
              <button class="border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded schedule_read-more_button">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleEvent;
