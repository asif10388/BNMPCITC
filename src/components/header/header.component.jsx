import React, { useRef, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  const [isToggled, toggle] = useState(false);
  let linkRef = useRef([]);
  let nav = useRef(null);

  return (
    <div class=" header relative mx-auto flex flex-wrap">
      <div
        className="hamburger"
        onClick={() => {
          toggle(!isToggled);
        }}
      >
        <div className="barTop"></div>
        <div className="barMiddle"></div>
        <div className="barBot"></div>
      </div>
      <RouterLink
        to="/"
        class="flex title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0"
      >
        <img
          src="https://jesmachi.sirv.com/bnmpcitc/logo.png"
          alt="logo"
          width="64px"
          height="64px"
        />
        <span class="ml-3 text-xl">BNMPCITC</span>
      </RouterLink>
      <nav
        class={`md:ml-auto navbar ${isToggled ? "open" : ""}`}
        ref={(element) => {
          nav = element;
        }}
      >
        <div className="nav-links">
          <RouterLink
            className={`mr-5 hover:text-gray-900 nav-link ${
              isToggled ? "slideIn open" : ""
            }`}
            to="/"
            ref={(element) => {
              linkRef.current[3] = element;
            }}
            onClick={() => {
              toggle(!isToggled);
            }}
          >
            Home
          </RouterLink>
          <RouterLink
            className={`mr-5 hover:text-gray-900 nav-link ${
              isToggled ? "slideIn open" : ""
            } `}
            to="/event"
            ref={(element) => {
              linkRef.current[0] = element;
            }}
            onClick={() => {
              toggle(!isToggled);
            }}
          >
            Event
          </RouterLink>

          <RouterLink
            className={`mr-5 hover:text-gray-900 nav-link ${
              isToggled ? "slideIn open" : ""
            }`}
            to="/gallery"
            ref={(element) => {
              linkRef.current[4] = element;
            }}
            onClick={() => {
              toggle(!isToggled);
            }}
          >
            Gallery
          </RouterLink>
          <RouterLink
            className={`mr-5 hover:text-gray-900 nav-link ${
              isToggled ? "slideIn open" : ""
            }`}
            to="/contact"
            ref={(element) => {
              linkRef.current[7] = element;
            }}
            onClick={() => {
              toggle(!isToggled);
            }}
          >
            Contact
          </RouterLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
