import {Box, Link} from "@mui/material";
import {Copyright, GitHub, LinkedIn} from "@mui/icons-material";

export function Footer() {
    return(
        <footer className={"footer"}>
            <div className={"footer-container"}>
                <Box className={"copyright-info"}>
                    <Copyright/>
                    <span>Aleksandar Polic</span>
                </Box>

                <Box className={"copyright-info"}>
                    <span>Links:</span>
                    <Link href={"https://www.linkedin.com/in/aleksandar-polic8/"}><LinkedIn/></Link>
                    <Link href={"https://github.com/alex-polic"}><GitHub/></Link>
                </Box>

            </div>
        </footer>
    );
}