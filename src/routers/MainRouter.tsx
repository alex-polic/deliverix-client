import {Route, Routes} from "react-router-dom";
import {HomePage, LoginPage, RegisterPage} from "../pages";
import React from "react";
import ProtectedRoute from "./routes/protectedRoute";
import {Dashboard} from "../pages/Dashboard";
import {Profile} from "../pages/Profile";

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
        </Routes>
    );

}