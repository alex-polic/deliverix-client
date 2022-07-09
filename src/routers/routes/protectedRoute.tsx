import { Navigate } from "react-router-dom";



const ProtectedRoute = ({
    redirectPath = '/',
    children,
}: any) => {
    const isLoggedIn = !!localStorage.getItem("token");

    if (!isLoggedIn) {
        return <Navigate to={redirectPath} replace={true}/>
    }

    return children;
};


export default ProtectedRoute;