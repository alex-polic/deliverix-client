import {Button, MenuItem, Select, TextField} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";
import ProductDTO from "../dtos/models/ProductDTO";

interface ProductPickerProps {
    index: number
    products: ProductDTO[],
    value: number,
    onProductChange: Function,
    onProductAdd: Function,
    onProductRemove: Function,
}

export function ProductPicker ({index, products, value, onProductChange, onProductAdd, onProductRemove }: ProductPickerProps) {
    return (
        <div className={"product-picker"}>
            <Select
                label={"Product"}
                value={value}
                onChange={(e) => onProductChange(index, e.target.value)}
            >
                {products.map(e =>
                    <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
                )}
            </Select>
            <TextField
                type={"number"}
                value={1}
            />
            <Button onClick={() => onProductAdd()}>
                <Add />
            </Button>
            <Button onClick={() => onProductRemove(index)}>
                <Remove />
            </Button>
        </div>

    )

}