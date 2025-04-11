import { Input, InputProps } from "../input/input.tsx";
import { Button } from "../button/button.tsx";
import s from "./input-with-button.module.scss";
import { ComponentPropsWithoutRef } from "react";
import { Variant } from "../neumorphism-ui-kit.tsx";
import clsx from "clsx";

type InputWithButton = {
  variant?: Variant;
  buttonProps?: ComponentPropsWithoutRef<"button">;
  inputProps?: InputProps;
} & ComponentPropsWithoutRef<"div">;

export const InputWithButton = ({
  variant = "round",
  className,
  buttonProps,
  inputProps,
  ...restProps
}: InputWithButton) => {
  const classNames = clsx(s.wrapper, className);

  return (
    <div className={classNames} {...restProps}>
      <Input variant={variant} {...inputProps} />
      <Button variant={variant} {...buttonProps}>
        <img src={"/loupe.svg"} alt="search" className={s.icon} />
      </Button>
    </div>
  );
};
