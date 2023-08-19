import {Route, Routes} from "react-router-dom";
import {HomePage, LoginPage, RegisterPage} from "../pages";
import React from "react";
import ProtectedRoute from "./routes/protectedRoute";
import {Dashboard} from "../pages/Dashboard";
import {Profile} from "../pages/Profile";
import {Verifications} from "../pages/AdminPages/Verifications";
import {AllOrders} from "../pages/AdminPages/AllOrders";
import {Products} from "../pages/AdminPages/Products";
import {BuyerOrder} from "../pages/BuyerPages/BuyerOrder";
import {BuyerPastOrders} from "../pages/BuyerPages/BuyerPastOrders";
import MyOrders from "../pages/SellerPages/MyOrders";
import {NewOrders} from "../pages/SellerPages/NewOrders";
import SellerCurrentOrder from "../pages/SellerPages/SellerCurrentOrder";
import Verification from "../pages/SellerPages/Verification";

export function MainRouter() {
    return(
        <Routes>
            <Route path="/" element={< HomePage />}></Route>
            <Route path="/login" element={< LoginPage />}></Route>
            <Route path="/register" element={< RegisterPage />}></Route>
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    < Dashboard />
                </ProtectedRoute>}>
            </Route>
            <Route path="/profile" element={
                <ProtectedRoute>
                    < Profile />
                </ProtectedRoute>}>
            </Route>
            <Route path="/admin/verifications" element={
                <ProtectedRoute>
                    < Verifications />
                </ProtectedRoute>}>
            </Route>
            <Route path="/admin/orders" element={
                <ProtectedRoute>
                    < AllOrders />
                </ProtectedRoute>}>
            </Route>
            <Route path="/admin/products" element={
                <ProtectedRoute>
                    < Products />
                </ProtectedRoute>}>
            </Route>

            <Route path="/buyer/order" element={
                <ProtectedRoute>
                    < BuyerOrder />
                </ProtectedRoute>}>
            </Route>
            <Route path="/buyer/pastOrders" element={
                <ProtectedRoute>
                    < BuyerPastOrders />
                </ProtectedRoute>}>
            </Route>

            <Route path="/seller/myOrders" element={
                <ProtectedRoute>
                    < MyOrders />
                </ProtectedRoute>}>
            </Route>
            <Route path="/seller/newOrder" element={
                <ProtectedRoute>
                    < NewOrders />
                </ProtectedRoute>}>
            </Route>
            <Route path="/seller/currentOrder" element={
                <ProtectedRoute>
                    < SellerCurrentOrder />
                </ProtectedRoute>}>
            </Route>

            <Route path="/seller/verification" element={
                <Verification/>
            }>
            </Route>
        </Routes>
    );

}