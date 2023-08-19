import {Layout} from "../components/Layout";
import {Button, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Check, Image} from "@mui/icons-material";
import {useState} from "react";
import {DateTime} from "luxon";

import * as authService from "../services/authService";
import {useNavigate} from "react-router-dom";

export function RegisterPage(){
    const navigate = useNavigate();

    const [profilePicture, setProfilePicture] = useState<File>();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [address, setAddress] = useState("");
    const [dateOfBirth, setDateOfBrith] = useState(DateTime.now());
    const [userType, setUserType] = useState("0");

    const registerUser = async () => {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("fullName", fullName);
        formData.append("passwordConfirmation", passwordConfirmation);
        formData.append("address", address);
        formData.append("dateOfBirth", dateOfBirth.toFormat("yyyy-MM-dd"));
        formData.append("userType", userType);

        if(profilePicture)
            formData.append("profilePicture", profilePicture as File);

        const response = await authService.register(formData);

        if(response != undefined)
            navigate("/login");
    }

    // @ts-ignore
    return(
        <Layout title={"Register"}>
            <div className={"register-container"}>
                <Button
                    variant="contained"
                    component="label"
                    sx={{ borderRadius: "50%", width: "100px", height: "100px" }}
                >
                    {profilePicture && <Check />}
                    {!profilePicture && <Image />}

                    <input
                        type="file"
                        onChange={(e) => setProfilePicture(e.target.files![0])}
                        hidden
                    />
                </Button>
                <TextField
                    className={"register-input"}
                    label="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    type={"username"}
                />
                <TextField
                    className={"register-input"}
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    type={"email"}
                />
                <TextField
                    className={"register-input"}
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    type={"password"}
                />
                <TextField
                    className={"register-input"}
                    label="Confirm Password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    type={"password"}
                />
                <hr/>
                <TextField
                    className={"register-input"}
                    label="Full Name"
                    onChange={(e) => setFullName(e.target.value)}/>
                <TextField
                    className={"register-input"}
                    label="Address"
                    onChange={(e) => setAddress(e.target.value)}/>
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
                    onChange={(e) => setDateOfBrith(DateTime.fromFormat(e.target.value, "yyyy-MM-dd"))}
                />
                <ToggleButtonGroup
                    orientation="horizontal"
                    value={userType}
                    onChange={(e, value) => setUserType(value)}
                    exclusive
                >
                    <ToggleButton value="0">
                        User
                    </ToggleButton>
                    <ToggleButton value="1">
                        Seller
                    </ToggleButton>
                    <ToggleButton value="2">
                        Admin
                    </ToggleButton>
                </ToggleButtonGroup>


                <Button
                    variant="contained"
                    onClick={registerUser}
                >Sign up</Button>
            </div>
        </Layout>
    );
}