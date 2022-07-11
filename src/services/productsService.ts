import ProductDTO from "../dtos/models/ProductDTO";

import * as apiClient from "../clients/apiClient";
import {CreateProductState} from "../store/products/productsSliceTypes";

export async function getAllProducts(): Promise<ProductDTO[]> {
    return await apiClient.getAllProducts();
}

export async function createProduct(product: CreateProductState) {
    return await apiClient.createProduct(product);
}

export async function updateProduct(product: ProductDTO) {
    return await apiClient.updateProduct(product);
}

export async function deleteProduct(id: number) {
    return await apiClient.deleteProduct(id);
}