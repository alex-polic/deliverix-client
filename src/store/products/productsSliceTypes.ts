import ProductDTO from "../../dtos/models/ProductDTO";

export interface CreateProductState {
    name: string,
    price: number,
    ingredientsDescription: string
}

export interface ProductsSliceState {
    createProduct: CreateProductState,
    updateProduct: ProductDTO,
    products: ProductDTO[],
    areProductsLoaded: boolean,
}

export const initialState: ProductsSliceState= {
    createProduct: {
        name: "",
        price: 0,
        ingredientsDescription: ""
    },

    updateProduct: {
        id: 0,
        name: "",
        price: 0,
        ingredientsDescription: "",
        createdAt: "",
        updatedAt: "",
    },

    products: [],

    areProductsLoaded: false
}