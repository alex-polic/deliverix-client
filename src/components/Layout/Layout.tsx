import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";

export function Layout(props : React.PropsWithChildren) {
    return(
        <>
            <Header />
             <main className={"page-content"}>{ props.children }</main>
            <Footer />
        </>
    );
}