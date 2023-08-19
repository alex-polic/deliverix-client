import { Navigate } from "react-router-dom";
import {useAppSelector} from "../../store/hooks";
import {currentUserSelector} from "../../store/auth/authSlice";

const ProtectedRoute = ({
    redirectPath = '/',
    children,
}: any) => {

    const isLoggedIn = !!localStorage.getItem("token");
    const currentUser = useAppSelector(currentUserSelector);

    if (!isLoggedIn) {
        return <Navigate to={redirectPath} replace={true}/>
    }

    if (currentUser &&
        currentUser.id > 0
        && currentUser.role === "Seller"
        && currentUser.verificationStatus != "Approved"
    ) {
        return <Navigate to={"/seller/verification"} replace={true}/>
    }

    return children;
};


export default ProtectedRoute;