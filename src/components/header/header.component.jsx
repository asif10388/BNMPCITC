import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ReactNavbar from "react-responsive-animate-navbar";
import "./header.styles.scss";

const Header = () => (
  <div className="header ">
    <header>
      <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a
          href="home"
          class="flex flex-col sm:flex-row title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
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
);

export default Header;
