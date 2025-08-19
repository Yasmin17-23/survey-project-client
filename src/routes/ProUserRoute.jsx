import PropTypes from "prop-types";
import LoadingSpinner from "../components/Shared/LoadingSpinner/LoadingSpinner";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router";


const ProUserRoute = ({ children }) => {
  const [role, isLoading] = useRole();

    if(isLoading) return <LoadingSpinner/>
    
    if(role === 'pro-user'){
        return children
    }
    return <Navigate to='/dashboard' />
}
ProUserRoute.propTypes = {
    children: PropTypes.element,
}

export default ProUserRoute