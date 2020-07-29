import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="header ">
    <header>
      <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://jesmachi.sirv.com/bnmpcitc/logo.png"
            width="64"
            height="64"
            alt="logo"
          />
          <span class="ml-3 text-xl">
            <RouterLink to="/">BNMPCITC</RouterLink>
          </span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <RouterLink className="mr-5 hover:text-gray-900 nav-link" to="/">
            Home
          </RouterLink>
          <RouterLink
            className="mr-5 hover:text-gray-900 nav-link"
            to="/schedule"
          >
            Schedule
          </RouterLink>
          <RouterLink
            className="mr-5 hover:text-gray-900 nav-link"
            to="/events"
          >
            Events
          </RouterLink>
          <RouterLink className="mr-5 hover:text-gray-900 nav-link" to="/about">
            About
          </RouterLink>
          <RouterLink
            className="mr-5 hover:text-gray-900 nav-link"
            to="/gallery"
          >
            Gallery
          </RouterLink>
          <RouterLink
            className="mr-5 hover:text-gray-900 nav-link"
            to="/register"
          >
            Register
          </RouterLink>
          <RouterLink
            className="mr-5 hover:text-gray-900 nav-link"
            to="/submit"
          >
            Submit
          </RouterLink>
          <RouterLink
            className="mr-5 hover:text-gray-900 nav-link"
            to="/contact"
          >
            Contact
          </RouterLink>
        </nav>
      </div>
    </header>
  </div>
  // <div class="navigation">
  //   <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

  //   <label for="navi-toggle" class="navigation__button">
  //     <div class="navigation__icon">&nbsp;</div>
  //   </label>

  //   <div class="navigation__background">&nbsp;</div>

  //   <nav class="navigation__nav">
  //     <ul class="navigation__list">
  //       <li class="navigation__item">
  //         <RouterLink to="/" class="navigation__link">
  //           <span>01</span> Home
  //         </RouterLink>
  //       </li>
  //       <li class="navigation__item">
  //         <a href="" class="navigation__link">
  //           <span>02</span>Your Benefits
  //         </a>
  //       </li>
  //       <li class="navigation__item">
  //         <a href="" class="navigation__link">
  //           <span>03</span>Popular tours
  //         </a>
  //       </li>
  //       <li class="navigation__item">
  //         <a href="" class="navigation__link">
  //           <span>04</span>Stories
  //         </a>
  //       </li>
  //       <li class="navigation__item">
  //         <a href="" class="navigation__link">
  //           <span>05</span>Book Now
  //         </a>
  //       </li>
  //     </ul>
  //   </nav>
  // </div>
);

export default Header;
