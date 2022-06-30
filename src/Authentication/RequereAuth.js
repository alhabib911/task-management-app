import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Fairbase.init";
import Loading from "../Share/Loading";




const RequereAuth = ({children}) => {
    const [ user, loading] = useAuthState(auth)
    const location = useLocation()
    if(loading) {
        return <Loading></Loading>
    }
    if(!user){
        return  <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequereAuth; 