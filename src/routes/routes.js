import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Cookies from "js-cookie";
import { MainScreen, PostIndividualScreen } from "../screen";

// Function to get the access token from cookies
const getAccessToken = () => {
  return Cookies.get("accessToken");
};

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return !!getAccessToken();
};

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
    index: true,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/post/:id",
        element: <PostIndividualScreen />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
