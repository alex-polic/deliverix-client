import {Layout} from "../components/Layout";
import {Button, TextField} from "@mui/material";

export function LoginPage(){
    return(
        <Layout title={"Login"}>
            <div className={"login-container"}>
                <TextField className={"login-input"} label="Email" />
                <TextField className={"login-input"} label="Password"/>

                <Button variant="contained" href={"/login"}>Sign in</Button>
            </div>
        </Layout>
    );
}