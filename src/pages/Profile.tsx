import {Layout} from "../components/Layout";
import {Button, TextField} from "@mui/material";
import {DateTime} from "luxon";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {
    userForUpdateUsername,
    userForUpdateEmail,
    userForUpdatePassword,
    userForUpdatePasswordConfirmation,
    userForUpdateFullName,
    userForUpdateAddress,
    userForUpdateDateOfBirth,
    currentUserSelector,
    fetchUserForUpdate,
    userForUpdateSelector,
    fetchCurrentUser,
    updateUser
} from "../store/auth/authSlice";
import {UPLOADS_PATH} from "../constants";

export function Profile(){

    const dispatch = useAppDispatch();
    const currentUserData = useAppSelector(currentUserSelector);
    const userForUpdate = useAppSelector(userForUpdateSelector);

    useEffect(() => {
        if(currentUserData.id > 0){
            dispatch(fetchUserForUpdate(currentUserData.id));
            return;
        }
        dispatch(fetchCurrentUser());
    }, [currentUserData])

    return(
        <Layout title={"Profile"}>
            <h1>Your Seller App profile</h1>
            <h2>View or edit your personal data.</h2>
            <div className={"profile-container"}>
                <img
                    className={"usercard-image-update"}
                    alt={"image"}
                    src={UPLOADS_PATH + userForUpdate.profilePictureUrl}>
                </img>
                <TextField
                    value={userForUpdate.username}
                    className={"register-input"}
                    onChange={(e) => dispatch(userForUpdateUsername(e.target.value))}
                    label="Username" />
                <TextField
                    value={userForUpdate.email}
                    className={"register-input"}
                    onChange={(e) => dispatch(userForUpdateEmail(e.target.value))}
                    label="Email" />
                <TextField
                    value={userForUpdate.password}
                    className={"register-input"}
                    onChange={(e) => dispatch(userForUpdatePassword(e.target.value))}
                    label="Password"/>
                <TextField
                    value={userForUpdate.passwordConfirmation}
                    className={"register-input"}
                    onChange={(e) => dispatch(userForUpdatePasswordConfirmation(e.target.value))}
                    label="Confirm Password"/>
                <TextField
                    value={userForUpdate.fullName}
                    className={"register-input"}
                    onChange={(e) => dispatch(userForUpdateFullName(e.target.value))}
                    label="Full Name"/>
                <TextField
                    value={userForUpdate.address}
                    className={"register-input"}
                    onChange={(e) => dispatch(userForUpdateAddress(e.target.value))}
                    label="Address"/>
                <TextField
                    value={DateTime.fromISO(userForUpdate.dateOfBirth).toFormat("yyyy-MM-dd")}
                    onChange={(e) => dispatch(userForUpdateDateOfBirth(e.target.value))}
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
                    onClick={() => dispatch(updateUser(userForUpdate))}
                >Update</Button>
            </div>

        </Layout>
    );
}