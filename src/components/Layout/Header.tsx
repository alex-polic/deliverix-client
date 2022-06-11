import {Button, Link} from "@mui/material";
import {Home} from "@mui/icons-material";


export function Header() {
    return(
        <header className={"header"}>
            <div className={"header-container"}>
                <Link className={"header-part"} href={"/"}> <Home fontSize="large" /> </Link>
                <nav className={"header-part"}>
                    <Button href={"/register"} variant="text">Sign up</Button>
                    <Button href={"/login"} variant="text">Login</Button>
                </nav>
            </div>
        </header>
    );
}