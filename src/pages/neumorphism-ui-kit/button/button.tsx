import { ComponentPropsWithoutRef, ElementType } from "react";
import s from "./button.module.scss";
import clsx from "clsx";
import { Variant } from "../neumorphism-ui-kit.tsx";

export type ButtonProps<T extends ElementType> = {
  variant?: Variant;
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">({
  variant = "round",
  className,
  children,
  as,
  ...restProps
}: ButtonProps<T>) => {
  const Component = (as || "button") as ElementType;

  const classNames = clsx(s.button, s[variant], className);
  return (
    <Component {...restProps} className={classNames}>
      <div className={s.inner}>{children}</div>
    </Component>
  );
};
