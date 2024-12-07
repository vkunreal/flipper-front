import { className } from "@/shared/lib/className";

import styles from "./Button.module.scss";

interface IButton {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({
  type = "button",
  className: propsClass = "",
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={className(styles.button, propsClass)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
