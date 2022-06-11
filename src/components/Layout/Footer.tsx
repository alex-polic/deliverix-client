import {Box, Link} from "@mui/material";
import {Copyright, Instagram, LinkedIn} from "@mui/icons-material";

export function Footer() {
    return(
        <footer className={"footer"}>
            <Box className={"footer-container"} sx={{
                height: 40,
                backgroundColor: 'info.main'
            }}
            >
                <Box className={"copyright-info"}>
                    <Copyright/>
                    <span>Aleksandar Polic</span>
                </Box>

                <Box className={"copyright-info"}>
                    <span>Links:</span>
                    <Link href={"https://www.linkedin.com"}><LinkedIn/></Link>
                    <Link href={"https://www.instagram.com"}><Instagram/></Link>
                </Box>

            </Box>
        </footer>
    );
}