import {Layout} from "../components/Layout";
import {Button, TextField} from "@mui/material";
import {useState} from "react";

import * as authService from "../services/authService";

export function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        await authService.login(email, password);
    }

    return(
        <Layout title={"Login"}>
            <div className={"login-container"}>
                <TextField
                    className={"login-input"}
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    className={"login-input"}
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    variant="contained"
                    onClick={loginUser}
                >Sign in</Button>
            </div>
        </Layout>
    );
}