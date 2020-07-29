import React from "react";
import "./about-hero.styles.scss";

const AboutHero = ({ heading, subtitle }) => (
  <section class="text-gray-700 body-font bg-hero">
    <div class="container mx-auto flex px-5 py-18 items-center justify-center flex-col">
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded"
        alt="hero"
        src="https://jesmachi.sirv.com/bnmpcitc/Official%20Logo.png"
      />
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
          {heading}
        </h1>
        <p class="mb-8 leading-relaxed text-white">{subtitle}</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
            Get to Know Us
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
