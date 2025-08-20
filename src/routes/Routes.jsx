import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import CreateSurvey from "../pages/Dashboard/Surveyor/CreateSurvey/CreateSurvey";
import SurveyDetails from "../pages/SurveyDetails/SurveyDetails";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import SurveyorRoute from "./SurveyorRoute";
import ReportedSurveys from "../pages/Dashboard/User/ReportedSurveys";
import ParticipatedSurveys from "../pages/Dashboard/User/ParticipatedSurveys";
import Pricing from "../pages/Pricing/Pricing";
import BuyMembership from "../pages/Pricing/BuyMembership";
import ManagePayments from "../pages/Dashboard/Admin/ManagePayments";
import ManageSurveys from "../pages/Dashboard/Admin/ManageSurveys";
import ResponsesSurvey from "../pages/Dashboard/Surveyor/ResponsesSurvey/ResponsesSurvey";
import IndividualResponseSurvey from "../pages/Dashboard/Surveyor/ResponsesSurvey/IndividualResponseSurvey";
import MySurveyLists from "../pages/Dashboard/Surveyor/MySurveyLists/MySurveyLists";
import FeedbackSurveys from "../pages/Dashboard/Surveyor/FeedbackSurveys/FeedbackSurveys";
import Profile from "../pages/Dashboard/Common/Profile";
import UserComments from "../pages/Dashboard/User/UserComments";
import ProUserRoute from "./ProUserRoute";
import Survey from "../pages/Survey/Survey";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardHome from "../pages/Dashboard/Common/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/survey/:id",
        element: <SurveyDetails />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/all-survey",
        element: <Survey />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/pricing",
        element: (
          <PrivateRoute>
            <Pricing />
          </PrivateRoute>
        ),
      },
      {
        path: "/buy-membership",
        element: (
          <PrivateRoute>
            <BuyMembership />
          </PrivateRoute>
        ),
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
            <DashboardHome/>
          </PrivateRoute>
        ),
      },
      {
        path: "user/surveys",
        element: (
          <PrivateRoute>
            <ParticipatedSurveys />
          </PrivateRoute>
        ),
      },
      {
        path: "user/my-reports",
        element: (
          <PrivateRoute>
            <ReportedSurveys />
          </PrivateRoute>
        ),
      },
      {
        path: "user/comments",
        element: (
          <PrivateRoute>
            <ProUserRoute>
              <UserComments />
            </ProUserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "create-survey",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <CreateSurvey />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "mysurvey-lists",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <MySurveyLists />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "surveyor/surveys",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <ResponsesSurvey />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "surveyor/surveys/:id",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <IndividualResponseSurvey />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "surveyor/feedback",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <FeedbackSurveys />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin/users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin/payments",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManagePayments />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin/surveys",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageSurveys />
            </AdminRoute>
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
