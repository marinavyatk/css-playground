import s from "./switcher.module.scss";
import { ComponentPropsWithoutRef } from "react";

type SwitcherProps = ComponentPropsWithoutRef<"input">;

export const Switcher = (props: SwitcherProps) => {
  return (
    <label className={s.switcher}>
      <div className={s.inner}>
        <input type="checkbox" className={s.input} {...props} />
        <div className={s.indicator}></div>
      </div>
    </label>
  );
};
