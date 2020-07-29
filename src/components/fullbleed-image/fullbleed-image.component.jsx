import React from "react";
import "./fullbleed-image.styles.scss";

const FullbleedImage = ({ bgImage }) => (
  <div className="ultra">
    <div
      className="fullbleed"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  </div>
);

export default FullbleedImage;
