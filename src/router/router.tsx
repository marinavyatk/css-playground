import { Route } from "react-router";
import { paths } from "./paths.ts";
import { Home } from "../pages/home/home.tsx";
import { GlowingText } from "../pages/glowing-text/glowing-text.tsx";
import { NeumorphismUikit } from "../pages/neumorphism-ui-kit/neumorphism-ui-kit.tsx";

export const routes = [
  { path: paths.home, element: <Home /> },
  { path: paths.glowingText, element: <GlowingText /> },
  { path: paths.neumorphism, element: <NeumorphismUikit /> },
];

export const router = routes.map(({ path, element }) => (
  <Route key={path} path={path} element={element} />
));
