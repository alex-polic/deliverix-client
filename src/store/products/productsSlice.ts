import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CreateProductState, initialState} from "./productsSliceTypes";
import * as productsService from "../../services/productsService";
import ProductDTO from "../../dtos/models/ProductDTO";
import {RootState} from "../store";

export const productsSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCreateProductName: (state, action: PayloadAction<string>) => {
            state.createProduct.name = action.payload;
        },
        setCreateProductPrice: (state, action: PayloadAction<number>) => {
            state.createProduct.price = action.payload;
        },
        setCreateProductIngredientsDescription: (state, action: PayloadAction<string>) => {
            state.createProduct.ingredientsDescription = action.payload;
        },
        setUpdateProduct: (state, action: PayloadAction<ProductDTO>) => {
            state.updateProduct = action.payload;
        },
        setUpdateProductName: (state, action: PayloadAction<string>) => {
            state.updateProduct.name = action.payload;
        },
        setUpdateProductPrice: (state, action: PayloadAction<number>) => {
            state.updateProduct.price = action.payload;
        },
        setUpdateProductIngredientsDescription: (state, action: PayloadAction<string>) => {
            state.updateProduct.ingredientsDescription = action.payload;
        },
    },
    extraReducers: builder =>  {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.areProductsLoaded = true;
        })
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.products = [...state.products, action.payload];
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            let index = state.products.findIndex(e => e.id === action.payload.id);

            let newArray = [...state.products];
            newArray[index] = action.payload;

            state.products = [...newArray];
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const newArray = state.products.filter(e => e.id !== action.payload.id)
            state.products = [...newArray];
        })
    }
});

export const fetchProducts = createAsyncThunk(
    "product/getAll",
    async () => {
        return await productsService.getAllProducts();
    });

export const createProduct = createAsyncThunk(
    "product/create",
    async (product: CreateProductState) => {
        return await productsService.createProduct(product);
    });

export const updateProduct = createAsyncThunk(
    "product/update",
    async (product: ProductDTO) => {
        return await productsService.updateProduct(product);
    });

export const deleteProduct = createAsyncThunk(
    "product/delete",
    async (id: number) => {
        return await productsService.deleteProduct(id);
    });

export const productsSelector = (state: RootState) => state.products.products;
export const createProductSelector = (state: RootState) => state.products.createProduct;
export const updateProductSelector = (state: RootState) => state.products.updateProduct;
export const areProductsLoadedSelector = (state: RootState) => state.products.areProductsLoaded;


export const {
    setCreateProductName,
    setCreateProductPrice,
    setCreateProductIngredientsDescription,
    setUpdateProduct,
    setUpdateProductName,
    setUpdateProductPrice,
    setUpdateProductIngredientsDescription
} = productsSlice.actions

export default productsSlice.reducer