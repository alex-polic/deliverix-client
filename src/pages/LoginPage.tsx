import {Layout} from "../components/Layout";
import {Button, TextField} from "@mui/material";
import {useState} from "react";

import * as authService from "../services/authService";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../store/hooks";
import {fetchCurrentUser} from "../store/auth/authSlice";

export function LoginPage(){
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginUser = async () => {
        await authService.login(email, password);

        dispatch(fetchCurrentUser());
        navigate('/dashboard');
    }

    return(
        <Layout title={"Login"}>
            <div className={"login-container"}>
                <TextField
                    className={"login-input"}
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    type={"email"}
                />
                <TextField
                    className={"login-input"}
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    type={"password"}
                />

                <Button
                    variant="contained"
                    onClick={loginUser}
                >Sign in</Button>
            </div>
        </Layout>
    );
}