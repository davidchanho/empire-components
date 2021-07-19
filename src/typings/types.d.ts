import { HTMLAttributes } from "react";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export interface InputGroupProps {
  id: string;
  type: "email" | "password";
  label: string;
  input: HTMLAttributes<HTMLInputElement>;
}

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export interface SidebarProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the sidebar be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Sidebar contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
