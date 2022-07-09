import {Button, Link} from "@mui/material";
import {Home} from "@mui/icons-material";
import {useAppSelector} from "../../store/hooks";

import * as authService from "../../services/authService";

export function Header({title = ""}) {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

    return(
        <header className={"header"}>
            <div className={"header-container"}>
                <Link className={"header-part"} href={isLoggedIn ? "/dashboard" : "/"}> <Home fontSize="large" /> </Link>
                <h1 className={"header-title"}>{title}</h1>
                <nav className={"header-part"}>
                    {!isLoggedIn &&
                        <>
                            <Button href={"/register"} variant="text">Sign up</Button>
                            <Button href={"/login"} variant="text">Login</Button>
                        </>
                    }
                    {isLoggedIn &&
                        <>
                            <Button onClick={() => authService.logout()} variant="text">Log out</Button>
                            <Button href={"/profile"} variant="text">Profile</Button>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
}