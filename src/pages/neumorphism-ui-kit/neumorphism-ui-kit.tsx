import { Button } from "./button/button.tsx";
import s from "./neumorphism-ui-kit.module.scss";
import { Switcher } from "./switcher/switcher.tsx";
import { Input } from "./input/input.tsx";
import { InputWithButton } from "./input-with-button/input-with-button.tsx";

export type Variant = "round" | "square";

export const NeumorphismUikit = () => {
  return (
    <div className={s.page}>
      <div className={s.wrapper}>
        <h1>Neumorphism ui-kit</h1>
        <div className={s.twoCols}>
          <Button>Round Button</Button>
          <Button variant={"square"}>Square Button</Button>
        </div>
        <div className={s.twoCols}>
          <Switcher />
          <Switcher defaultChecked />
        </div>
        <InputWithButton />
        <InputWithButton variant={"square"} />
        <Input variant={"square"} endIcon />
        <Input variant={"square"} endIcon />
      </div>
    </div>
  );
};
