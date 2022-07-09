import {Layout} from "../components/Layout";
import {Button, TextField} from "@mui/material";
import {DateTime} from "luxon";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {fetchUserForUpdate, userForUpdate} from "../store/auth/authSlice";

export function Profile(){

    const dispatch = useAppDispatch();
    const user = useAppSelector(userForUpdate)

    useEffect(() => {
        dispatch(fetchUserForUpdate(16))
    }, [dispatch])

    console.log(DateTime.fromISO(user.dateOfBirth))
    return(
        <Layout title={"Profile"}>
            <h1>Your Deliverix profile</h1>
            <h2>View or edit your personal data.</h2>
            <div className={"profile-container"}>
                <TextField
                    value={user.username}
                    className={"register-input"}
                    label="Username" />
                <TextField
                    value={user.email}
                    className={"register-input"}
                    label="Email" />
                <TextField
                    value={""}
                    className={"register-input"}
                    label="Password"/>
                <TextField
                    value={""}
                    className={"register-input"}
                    label="Confirm Password"/>
                <TextField
                    value={user.fullName}
                    className={"register-input"}
                    label="Full Name"/>
                <TextField
                    value={user.address}
                    className={"register-input"}
                    label="Address"/>
                <TextField
                    value={DateTime.fromISO(user.dateOfBirth).toFormat("yyyy-MM-dd")}
                    className={"register-input"}
                    id="date"
                    label="Birthday"
                    type="date"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
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