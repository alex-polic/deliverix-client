import { Navigate } from "react-router-dom";
import {useAppSelector} from "../../store/hooks";
import {currentUserSelector} from "../../store/auth/authSlice";

const ProtectedRoute = ({
    redirectPath = '/',
    children,
}: any) => {

    const isLoggedIn = !!localStorage.getItem("token");
    const currentUser = useAppSelector(currentUserSelector);

    console.log(currentUser)

    if (!isLoggedIn) {
        return <Navigate to={redirectPath} replace={true}/>
    }

    if (currentUser &&
        currentUser.id > 0
        && currentUser.role === "Courier"
        && currentUser.verificationStatus != "Approved"
    ) {
        return <Navigate to={"/courier/verification"} replace={true}/>
    }

    return children;
};


export default ProtectedRoute;