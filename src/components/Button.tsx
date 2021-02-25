import * as React from "react";

export type ButtonProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof React.ReactHTML;
};

export const Button: React.FC<ButtonProps> = ({ as = "button", ...props }) => {
  return React.createElement(as, {
    role: as !== "button" ? "button" : undefined,
    tabIndex: as !== "button" ? 0 : undefined,
    ...props,
  });
};
