import {Box, Button} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";

interface ProductCardProps {
    name: string,
    price: number,
    ingredientsDescription: string,
    onEditClick: Function,
    onDeleteClick: Function
}

export function ProductCard({name, price, ingredientsDescription, onEditClick, onDeleteClick}: ProductCardProps) {
    return (
        <Box
            className={"productcard-container"}
            sx={{
                backgroundColor: 'secondary.dark',
                borderRadius: '10px',
            }}
        >
            <p>{name}</p>
            <p>{price}</p>
            <p className={"productcard-description"}>{ingredientsDescription}</p>
            <div className={"productcard-actions"}>
                <Button onClick={() => onEditClick()}><Edit /></Button>
                <Button onClick={() => onDeleteClick()}><Delete /></Button>
            </div>

        </Box>

    );
}