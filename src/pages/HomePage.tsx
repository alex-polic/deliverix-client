import {Layout} from "../components/Layout";
import {Button} from "@mui/material";

export function HomePage(){
    return(
        <Layout>
            <h1>Welcome to Sellers!</h1>
            <h2>Sellers is your go-to delivery service.</h2>
            <div className={"signoptions-container"}>
                <div className={"signoptions-section"}>
                    <p>
                        If you already have an account, use a button below to sign in and create an order
                    </p>
                    <Button variant="contained" href={"/login"}>Sign in</Button>
                </div>
                <div className={"signoptions-section"}>
                    <p>
                        If you are new around here, use the button below to create an account and join Sellers App.
                    </p>
                    <Button variant="contained" href={"/register"}>Sign up</Button>
                </div>
            </div>
        </Layout>
    );
}