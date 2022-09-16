import React from "react";

import "./button.styles.scss";

type Props = {
  text: string;
  type?: string;
  className?: string;
};

const MainButton: React.FC<Props> = function MainButton({
  text,
  type = null,
  className,
}) {
  return (
    <button
      type={type === "button" ? "button" : "submit"}
      className={`button ${className}`}
    >
      {text}
    </button>
  );
};

MainButton.defaultProps = {
  type: "button",
  className: "button__main",
};

export default MainButton;
