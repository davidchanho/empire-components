import React from "react";
import { SidebarProps } from "../../types/types";
import "./sidebar.scss";

/**
 * Primary UI component for user interaction
 */
export const Sidebar = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: SidebarProps) => {
  const mode = primary
    ? "storybook-sidebar--primary"
    : "storybook-sidebar--secondary";
  return (
    <aside
      className={["storybook-sidebar", `storybook-sidebar--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </aside>
  );
};
