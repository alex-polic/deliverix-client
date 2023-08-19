import {Box} from "@mui/material";
import DeliveryStatus from "../dtos/enums/deliveryStatus";

interface OrderCardProps {
    id: number
    buyerFullName: string,
    courierFullName: string,
    deliveryAddress: string,
    comment: string,
    fullPrice: number,
    status: DeliveryStatus
}

export function OrderCard({id, buyerFullName, courierFullName, deliveryAddress, comment, fullPrice, status}: OrderCardProps) {
    return (
        <Box
            className={"ordercard-container"}
            sx={{
                backgroundColor: 'secondary.dark',
                borderRadius: '10px',
            }}
        >
            <p>{id}</p>
            <p>{buyerFullName}</p>
            <p>{courierFullName}</p>
            <p>{deliveryAddress}</p>
            <p>{comment}</p>
            <p>{fullPrice}</p>
            <p>{DeliveryStatus[status]}</p>

        </Box>

    );
}