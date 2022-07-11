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
        </Routes>
    );

}