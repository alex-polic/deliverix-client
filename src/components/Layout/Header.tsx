import {Button} from "@mui/material";


export function Header() {
    return(
        <header className={"header-container"}>
            {/*<Logo></Logo>*/}
            <nav>
                <Button href={"/register"} variant="text">Sign up</Button>
                <Button href={"/login"} variant="text">Login</Button>
            </nav>
        </header>
    );
}