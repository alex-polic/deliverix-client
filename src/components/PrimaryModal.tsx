import {ReactElement} from "react";
import {Modal} from "@mui/material";

interface PrimaryModalProps {
    open: boolean,
    onClose: () => void,
    children: ReactElement
}

export function PrimaryModal({open, onClose, children}: PrimaryModalProps) {
    return <Modal
        className={"primary-modal"}
        open={open}
        onClose={onClose}
    >
        <div className={"primary-modal-container"}>
            {children}
        </div>
    </Modal>;
}