import {Layout} from "../components/Layout";
import {Button, TextField} from "@mui/material";
import {DateTime} from "luxon";
import {useState} from "react";

export function Profile(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [address, setAddress] = useState("");
    const [dateOfBirth, setDateOfBrith] = useState(DateTime.now());

    return(
        <Layout title={"Profile"}>
            <h1>Your Deliverix profile</h1>
            <h2>View or edit your personal data.</h2>
            <div className={"profile-container"}>
                <TextField
                    value={username}
                    className={"register-input"}
                    label="Username"
                    onChange={(e) => setUsername(e.target.value)} />
                <TextField
                    value={email}
                    className={"register-input"}
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}/>
                <TextField
                    value={password}
                    className={"register-input"}
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}/>
                <TextField
                    value={passwordConfirmation}
                    className={"register-input"}
                    label="Confirm Password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <TextField
                    value={fullName}
                    className={"register-input"}
                    label="Full Name"
                    onChange={(e) => setFullName(e.target.value)}/>
                <TextField
                    value={address}
                    className={"register-input"}
                    label="Address"
                    onChange={(e) => setAddress(e.target.value)}/>
                <TextField
                    value={dateOfBirth.toFormat("yyyy-MM-dd")}
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

                <Button
                    className={"update-button"}
                    variant="contained"
                    onClick={() => {}}
                >Update</Button>
            </div>

        </Layout>
    );
}