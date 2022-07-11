import {LoginDTO} from "../dtos/custom/auth";
import axios from "axios";
import UserDTO from "../dtos/models/UserDTO";
import {CurrentUserState, UpdateUserState} from "../store/auth/authSliceTypes";
import ProductDTO from "../dtos/models/ProductDTO";
import {CreateProductState} from "../store/products/productsSliceTypes";
import OrderDTO from "../dtos/models/OrderDTO";
import {CreateOrderState} from "../store/orders/ordersSliceTypes";
import OrderWithBuyerAndCourierAndOrderedProductsDTO
    from "../dtos/custom/OrderWithBuyerAndCourierAndOrderedProductsDTO";

export const login = async (payload: LoginDTO) : Promise<string> => {
    const response = await axiosInstance.post("/auth/login", payload);

    return response.data;
}

export const register = async (payload: FormData) => {
    await axiosInstance.post("/auth/register", payload);
}

export const getUserById = async (id: number) : Promise<UserDTO> => {
    const response = await axiosInstance.get(`/user/getById?${getUrlParams({id})}`);

    return response.data;
}

export const getCurrentUserData = async () : Promise<CurrentUserState> => {
    const response = await axiosInstance.get(`/auth/getUserData`);

    return response.data;
}

export const updateUser = async (data: UpdateUserState) : Promise<UserDTO> => {
    const response = await axiosInstance.patch(`/user/update`, data);

    return response.data;
}

export const getAllCouriers = async () : Promise<UserDTO[]> => {
    const response = await axiosInstance.get(`/user/getAllCouriers`);

    return response.data;
}

export const approveVerification = async (courierId: number) : Promise<UserDTO> => {
    const response = await axiosInstance.post(`/user/approveVerification`, {courierId});

    return response.data;
}

export const rejectVerification = async (courierId: number) : Promise<UserDTO> => {
    const response = await axiosInstance.post(`/user/rejectVerification`, {courierId});

    return response.data;
}

// Products

export const getAllProducts = async () : Promise<ProductDTO[]> => {
    const response = await axiosInstance.get(`/product/getAll`);

    return response.data;
}

export const createProduct = async (product: CreateProductState) : Promise<ProductDTO> => {
    const response = await axiosInstance.post(`/product/create`, product);

    return response.data;
}

export const updateProduct = async (product: ProductDTO) : Promise<ProductDTO> => {
    const response = await axiosInstance.patch(`/product/update`, product);

    return response.data;
}

export const deleteProduct = async (id: number) : Promise<ProductDTO> => {
    const response = await axiosInstance.delete(`/product/delete?${getUrlParams({id})}`);

    return response.data;
}

// Orders

export const getCurrentForBuyerWithOrderedProducts = async ()
    : Promise<OrderWithBuyerAndCourierAndOrderedProductsDTO> => {

    const response = await axiosInstance.get(`/order/getCurrentForBuyerWithOrderedProducts`);

    return response.data;
}

export const getAllOrders = async () : Promise<OrderWithBuyerAndCourierAndOrderedProductsDTO[]> => {
    const response = await axiosInstance.get(`/order/getAll`);

    return response.data;
}

export const getAllPastOrdersForBuyer = async (buyerId: number) : Promise<OrderWithBuyerAndCourierAndOrderedProductsDTO[]> => {
    const response = await axiosInstance.get(`/order/getAllPastForBuyer?${getUrlParams({buyerId})}`);

    return response.data;
}

export const createOrderWithOrderedProducts = async (order: CreateOrderState)
    : Promise<OrderWithBuyerAndCourierAndOrderedProductsDTO> => {
    const response = await axiosInstance.post(`/order/create`, order);

    return response.data;
}

export const updateOrder = async (order: OrderDTO)
    : Promise<OrderWithBuyerAndCourierAndOrderedProductsDTO> => {
    const response = await axiosInstance.patch(`/order/update`, order);

    return response.data;
}

export const deleteOrder = async (id: number) : Promise<OrderDTO> => {
    const response = await axiosInstance.delete(`/order/delete?${getUrlParams({id})}`);

    return response.data;
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5180',
    headers: {
        'X-Custom-Header': 'foobar',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});

const getUrlParams = (data: object) : string => {
    let result = "";
    for (let i = 0; i < Object.keys(data).length; i++) {
        result += Object.keys(data)[i] + "=" + Object.values(data)[i];
    }

    return result;
}