import {Box, Button} from "@mui/material";
import {Check, DoNotDisturb} from "@mui/icons-material";
import VerificationStatus from "../dtos/enums/verificationStatus";
import {UPLOADS_PATH} from "../constants";

interface UserCardProps {
    profilePictureUrl: string,
    username: string,
    fullName: string,
    email: string,
    dateOfBirth: string,
    verificationStatus: VerificationStatus,
    onApproveClick: Function,
    onRejectClick: Function
}

export function UserCard({
     profilePictureUrl,
     username,
     fullName,
     email,
     dateOfBirth,
     verificationStatus,
     onApproveClick,
     onRejectClick
}: UserCardProps) {
    return (
            <Box
                className={"usercard-container"}
                sx={{
                    backgroundColor: 'secondary.dark',
                    borderRadius: '10px',
                }}
            >
                    <img className={"usercard-image"} alt={"image"} src={UPLOADS_PATH + profilePictureUrl}></img>
                    <p>{username}</p>
                    <p>{fullName}</p>
                    <p>{email}</p>
                    <p>{dateOfBirth}</p>
                    <p>{VerificationStatus[verificationStatus]}</p>
                    <div className={"usercard-actions"}>
                        {verificationStatus === VerificationStatus.Pending &&
                            <>
                                <Button onClick={() => onApproveClick()}><Check /></Button>
                                <Button onClick={() => onRejectClick()}><DoNotDisturb /></Button>
                            </>
                        }
                    </div>

            </Box>

    );
}