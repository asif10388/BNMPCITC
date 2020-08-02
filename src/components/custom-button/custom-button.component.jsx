import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isPrimary,
  isSecondary,
  isRegular,
  isRegisterAndSubmit,
  ...otherProps
}) => (
  <button
    className={`${isPrimary ? "primary-button" : ""} ${
      isSecondary ? "secondary-button" : ""
    } ${isRegisterAndSubmit ? "secondary-button flex mx-auto" : ""} ${
      isRegular ? "regular-button ml-2" : ""
    } default-button-styles`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
