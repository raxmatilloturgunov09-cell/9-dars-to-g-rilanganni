import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./components/layouts/Mainlayout";
import Home from "./components/pages/Home";
import Button from "./components/Button"; // <-- Mana shu yo'l to'g'ri bo'lishi shart!
import Downlotos from "./components/pages/Downlots";
import Likeas from "./components/pages/Likeas";
import ErrorPage from "./components/errorPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/downs",
          element: <Downlotos />,
        },
        {
          path: "/likeas",
          element: <Likeas />,
        },
        {
          path: "/Button",
          element: <Button />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
