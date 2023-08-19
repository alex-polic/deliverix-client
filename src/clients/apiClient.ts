import {LoginDTO} from "../dtos/custom/auth";
import axios, {AxiosError, AxiosResponse} from "axios";
import UserDTO from "../dtos/models/UserDTO";
import {CurrentUserState, UpdateUserState} from "../store/auth/authSliceTypes";
import ProductDTO from "../dtos/models/ProductDTO";
import {CreateProductState} from "../store/products/productsSliceTypes";
import OrderDTO from "../dtos/models/OrderDTO";
import {CreateOrderState} from "../store/orders/ordersSliceTypes";
import OrderWithBuyerAndSellerAndOrderedProductsDTO
    from "../dtos/custom/OrderWithBuyerAndSellerAndOrderedProductsDTO";
import {store} from "../store/store";
import {logout} from "../store/auth/authSlice";

export const login = async (payload: LoginDTO) : Promise<string> => {
    const response = await axiosInstance().post("/auth/login", payload);

    return response.data;
}

export const register = async (payload: FormData) => {
    return await axiosInstance().post("/auth/register", payload);
}

export const getUserById = async (id: number) : Promise<UserDTO> => {
    const response = await axiosInstance().get(`/user/getById?${getUrlParams({id})}`);

    return response.data;
}

export const getCurrentUserData = async () : Promise<CurrentUserState> => {
    const response = await axiosInstance().get(`/auth/getUserData`);

    return response.data;
}

export const updateUser = async (data: UpdateUserState) : Promise<UserDTO> => {
    const response = await axiosInstance().patch(`/user/update`, data);

    return response.data;
}

export const getAllSellers = async () : Promise<UserDTO[]> => {
    const response = await axiosInstance().get(`/user/getAllSellers`);

    return response.data;
}

export const approveVerification = async (sellerId: number) : Promise<UserDTO> => {
    const response = await axiosInstance().post(`/user/approveVerification`, {sellerId});

    return response.data;
}

export const rejectVerification = async (sellerId: number) : Promise<UserDTO> => {
    const response = await axiosInstance().post(`/user/rejectVerification`, {sellerId});

    return response.data;
}

// Products

export const getAllProducts = async () : Promise<ProductDTO[]> => {
    const response = await axiosInstance().get(`/product/getAll`);

    return response.data;
}

export const createProduct = async (product: CreateProductState) : Promise<ProductDTO> => {
    const response = await axiosInstance().post(`/product/create`, product);

    return response.data;
}

export const updateProduct = async (product: ProductDTO) : Promise<ProductDTO> => {
    const response = await axiosInstance().patch(`/product/update`, product);

    return response.data;
}

export const deleteProduct = async (id: number) : Promise<ProductDTO> => {
    const response = await axiosInstance().delete(`/product/delete?${getUrlParams({id})}`);

    return response.data;
}

// Orders

export const getCurrentForBuyerWithOrderedProducts = async ()
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> => {

    const response = await axiosInstance().get(`/order/getCurrentForBuyerWithOrderedProducts`);

    return response.data;
}

export const getCurrentForSellerWithOrderedProducts = async ()
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> => {

    const response = await axiosInstance().get(`/order/getCurrentForSellerWithOrderedProducts`);

    return response.data;
}

export const getAllOrders = async () : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO[]> => {
    const response = await axiosInstance().get(`/order/getAll`);

    return response.data;
}

export const getAllPastOrdersForBuyer = async (buyerId: number) : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO[]> => {
    const response = await axiosInstance().get(`/order/getAllPastForBuyer?${getUrlParams({buyerId})}`);

    return response.data;
}

export const getAllPastOrdersForSeller = async (sellerId: number) : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO[]> => {
    const response = await axiosInstance().get(`/order/getAllPastForSeller?${getUrlParams({sellerId})}`);

    return response.data;
}

export const getAllPendingOrders = async () : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO[]> => {
    const response = await axiosInstance().get(`/order/getAllPendingOrders`);

    return response.data;
}

export const acceptDeliveryOfOrder = async (orderId: number) : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> => {
    const response = await axiosInstance().post(`/order/acceptDeliveryOfOrder?${getUrlParams({orderId})}`);

    return response.data;
}

export const finishDeliveryOfOrder = async (orderId: number) : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> => {
    const response = await axiosInstance().post(`/order/finishDeliveryOfOrder?${getUrlParams({orderId})}`);

    return response.data;
}

export const createOrderWithOrderedProducts = async (order: CreateOrderState)
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> => {
    const response = await axiosInstance().post(`/order/createWithOrderedProducts`, order);

    return response.data;
}

export const updateOrder = async (order: OrderDTO)
    : Promise<OrderWithBuyerAndSellerAndOrderedProductsDTO> => {
    const response = await axiosInstance().patch(`/order/update`, order);

    return response.data;
}

export const deleteOrder = async (id: number) : Promise<OrderDTO> => {
    const response = await axiosInstance().delete(`/order/delete?${getUrlParams({id})}`);

    return response.data;
}

export const axiosInstance =  () => {
    const token = localStorage.getItem("token")
    const instance = axios.create({
        baseURL: 'http://localhost:5180',
        headers: {
            'X-Custom-Header': 'foobar',
            'Authorization': `Bearer ${token}`
        }
    });

    instance.interceptors.response.use(
        (next: AxiosResponse) => Promise.resolve(next),
        (error: AxiosError) => {

            if(error.response?.status === 401 || error.response?.status == 403)
                store.dispatch(logout());

            if(error.response?.status === 400)
            {
                const errorData = error.response.data as ServerError
                alert(errorData.Message);
            }

            if(error.response?.status === 500)
            {
                alert("Something went wrong on the server side");
            }
        }
    );

    return instance;
}

const getUrlParams = (data: object) : string => {
    let result = "";
    for (let i = 0; i < Object.keys(data).length; i++) {
        result += Object.keys(data)[i] + "=" + Object.values(data)[i];
    }

    return result;
}

interface ServerError {
    Message: string,
    StatusCode: number,
    ErrorCode: number
}