import {Route, Routes} from "react-router-dom";
import {HomePage, LoginPage, RegisterPage} from "../pages";
import React from "react";

export function MainRouter() {
    return(
        <Routes>
            <Route path="/" element={< HomePage />}></Route>
            <Route path="/login" element={< LoginPage />}></Route>
            <Route path="/register" element={< RegisterPage />}></Route>
        </Routes>
    );

}