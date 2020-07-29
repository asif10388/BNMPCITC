import React from "react";
import "./fullbleed-image.styles.scss";

const FullbleedImage = ({ bgImage }) => (
  <div
    className="fullbleed"
    style={{ backgroundImage: `url(${bgImage})` }}
  ></div>
);

export default FullbleedImage;
