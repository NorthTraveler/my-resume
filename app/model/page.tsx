"use client";
import { Provider } from "react-redux";
import TopInput from "./top";
import store from "../store";

export default function Model(){
    return  (
        <Provider store={store}>
            <TopInput />
        </Provider>
    )
}