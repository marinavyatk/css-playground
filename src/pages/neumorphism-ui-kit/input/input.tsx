import s from "./input.module.scss";
import { Variant } from "../neumorphism-ui-kit.tsx";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export type InputProps = {
  variant?: Variant;
  endIcon?: boolean;
} & ComponentPropsWithoutRef<"input">;

export const Input = ({
  variant = "round",
  endIcon = false,
  className,
  ...restProps
}: InputProps) => {
  const classNames = clsx(s.wrapper, s[variant], className);

  return (
    <label className={classNames}>
      <input
        type="text"
        placeholder="Search..."
        className={s.input}
        {...restProps}
      />
      {endIcon && <img src={"/loupe.svg"} alt="search" className={s.icon} />}
    </label>
  );
};
