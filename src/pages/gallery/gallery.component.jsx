import React from "react";
import "./gallery.styles.scss";

const Gallery = () => (
  <div>
    <section class="body">
      <div class="bg-image"></div>
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-black bg-white p-4 lg:w-1/3 lg:mb-0 mb-4">
            Some of Our Memorable Moments
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            It wasn't an easy journey. There have been a lot of ups and downs.
            But our club overcame even the biggest obstacles since its
            inception. We've had plenty of amazing moments througout our
            ephemeral journey. Below are some of the highlights of our journey.
          </p>
        </div>
        <div class="flex flex-wrap md:m-2 m-1 image-effect">
          <div class="flex flex-wrap w-full sm:w-1/2">
            <div class="md:p-2 p-1 w-full sm:w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={require("../../images/gallerryimg1.JPG")}
              />
            </div>
            <div class="md:p-2 p-1 w-full sm:w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={require("../../images/gallerryimg2.jpg")}
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src={require("../../images/gallerryimg3.JPG")}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-full sm:w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src={require("../../images/gallerryimg4.JPG")}
              />
            </div>
            <div class="md:p-2 p-1 w-full sm:w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={require("../../images/gallerryimg5.jpg")}
              />
            </div>
            <div class="md:p-2 p-1 w-full sm:w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={require("../../images/gallerryimg6.JPG")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
