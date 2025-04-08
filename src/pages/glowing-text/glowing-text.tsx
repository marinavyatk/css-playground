import s from "./glowing-text.module.scss";

export const GlowingText = () => {
  const returnWord = (word: string) => {
    return word.split("").map((char, index) => {
      return (
        <label key={index}>
          <input type="checkbox" />
          {char}
        </label>
      );
    });
  };

  return (
    <div className={s.page}>
      <div className={s.text}>
        <div>{returnWord("Glowing")}</div>
        <div>{returnWord("text")}</div>
      </div>
    </div>
  );
};
