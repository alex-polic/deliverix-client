import {Box, Link} from "@mui/material";
import {Copyright, GitHub, LinkedIn} from "@mui/icons-material";

export function Footer() {
    return(
        <footer className={"footer"}>
            <div className={"footer-container"}>
                <Box className={"copyright-info"}>
                    <Copyright/>
                    <span>Web 2 - Sellers app</span>
                </Box>
            </div>
        </footer>
    );
}