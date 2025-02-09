import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsPage from "./pages/PostsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import SomewherePage from "./pages/SomewherePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/somewhere",
    element: <SomewherePage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
