import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/Shared/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth"
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading) return <LoadingSpinner/>
    if(user) return children

    return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoute.propTypes = {
    children: PropTypes.element,
}

export default PrivateRoute