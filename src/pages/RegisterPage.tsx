import {Layout} from "../components/Layout";
import {Button, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Image} from "@mui/icons-material";

export function RegisterPage(){
    return(
        <Layout title={"Register"}>
            <div className={"register-container"}>
                <Button
                    variant="contained"
                    component="label"
                    sx={{ borderRadius: "50%", width: "100px", height: "100px" }}
                >
                    <Image />
                    <input
                        type="file"
                        hidden
                    />
                </Button>
                <TextField className={"register-input"} label="Username" />
                <TextField className={"register-input"} label="Email" />
                <TextField className={"register-input"} label="Password"/>
                <TextField className={"register-input"} label="Confirm Password"/>
                <hr/>
                <TextField className={"register-input"} label="Full Name"/>
                <TextField className={"register-input"} label="Address"/>
                <TextField
                    className={"register-input"}
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2000-01-01"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <ToggleButtonGroup
                    orientation="horizontal"
                    value="admin"
                    exclusive
                >
                <ToggleButton
                    value="user"
                >
                    User
                </ToggleButton>
                <ToggleButton
                    value="courier"
                >
                    Courier
                </ToggleButton>
                <ToggleButton
                    value="admin"
                >
                    Admin
                </ToggleButton>
                </ToggleButtonGroup>


                <Button variant="contained" href={"/register"}>Sign up</Button>
            </div>
        </Layout>
    );
}