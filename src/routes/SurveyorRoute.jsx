import { Navigate } from "react-router";
import LoadingSpinner from "../components/Shared/LoadingSpinner/LoadingSpinner";
import useRole from "../hooks/useRole"
import PropTypes from "prop-types";

const SurveyorRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;
  
  if (role === "surveyor") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

SurveyorRoute.propTypes = {
    children: PropTypes.element,
}

export default SurveyorRoute;
