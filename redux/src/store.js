import { configureStore } from "@reduxjs/toolkit";
import reducerCrud from "./reducer";
import reducerCounter from "./reducerCounter";


export const store =configureStore({
    reducer:{
        userData:reducerCrud,
        counter:reducerCounter,
    },
})