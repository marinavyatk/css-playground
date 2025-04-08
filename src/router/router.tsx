import { Route } from "react-router";
import { paths } from "./paths.ts";
import { Home } from "../pages/home/home.tsx";
import { GlowingText } from "../pages/glowing-text/glowing-text.tsx";

export const routes = [
  { path: paths.home, element: <Home /> },
  { path: paths.glowingText, element: <GlowingText /> },
];

export const router = routes.map(({ path, element }) => (
  <Route key={path} path={path} element={element} />
));
