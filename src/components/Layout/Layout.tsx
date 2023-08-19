import {Header} from "./Header";
import {Footer} from "./Footer";

interface ILayoutProps {
    title?: string,
    children?: any
}

export function Layout({title = "Sellers App", children}: ILayoutProps) {
    return(
        <>
            <Header title={title}/>
             <div className={"page-content"}>{ children }</div>
            <Footer />
        </>
    );
}