import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "@pages/home";
import BlogList from "@pages/bloglist";
import Contact from "@pages/contact";
import NotFoundPage from "@pages/notfoundpage";
import Recipes from "@pages/Recipies";

const Router = () => {
  const Route = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home/*", element: <Home /> },
    { path: "/recipes", element: <Recipes /> },
    { path: "/blog", element: <BlogList /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return Route;
};

export default Router;
