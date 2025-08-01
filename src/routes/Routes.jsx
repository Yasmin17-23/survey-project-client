import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Common from "../pages/Dashboard/Common/Common";
import CreateSurvey from "../pages/Dashboard/Surveyor/CreateSurvey/CreateSurvey";
import MySurveyLists from "../pages/Dashboard/Surveyor/MySurveyLists/MySurveyLists";
import Profile from "../pages/Dashboard/Common/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Common />
          </PrivateRoute>
        ),
      },
      {
        path: "create-survey",
        element: (
          <PrivateRoute>
            <CreateSurvey />
          </PrivateRoute>
        ),
      },
      {
        path: "my-surveylists",
        element: (
          <PrivateRoute>
            <MySurveyLists />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
