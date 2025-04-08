import { Link } from "react-router";
import { paths } from "../../router/paths.ts";
import s from "./home.module.scss";

export const Home = () => {
  return (
    <div className={s.page}>
      <h1>CSS Sandbox</h1>
      <ul className={s.listContainer}>
        <li>
          <Link to={paths.glowingText}>Glowing Text</Link>
        </li>
      </ul>
    </div>
  );
};
