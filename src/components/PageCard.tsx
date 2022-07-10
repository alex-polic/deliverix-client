import {Box, Link,} from "@mui/material";
import { DonutSmall} from "@mui/icons-material";
import {ReactElement} from "react";

interface PageCardProps {
    href: string,
    pageTitle: string,
    pageIcon: ReactElement
}

export function PageCard({href, pageTitle, pageIcon = <DonutSmall />}: PageCardProps) {
    return (
        <div className={"pagecard-container"}>
            <Link href={href} underline="none">
                <Box
                    sx={{
                        width: 250,
                        height: 170,
                        backgroundColor: 'primary.dark',
                        borderRadius: '10px',
                        padding: '10px',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                            opacity: [0.9, 0.8, 0.7],
                            color: 'primary.dark'
                        },
                    }}
                >
                    <div className={"pagecard-upper-div"}>
                        {pageIcon}
                    </div>

                    <div className={"pagecard-lower-div"}>
                        <h1>{pageTitle}</h1>
                    </div>

                </Box>
            </Link>

        </div>
    );
}