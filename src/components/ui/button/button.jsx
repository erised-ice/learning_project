import React from "react";
import { StyledButton } from "./styles";

function Button({ children, minWidth, link, className }) {
  return (
    <StyledButton
      $minWidth={minWidth}
      className={className}
      {...(link ? { href: link } : { as: "button", type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
