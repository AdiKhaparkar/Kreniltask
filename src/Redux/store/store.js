import { configureStore } from "@reduxjs/toolkit";
import  alertGenerator  from "../reducer/reducer";

const store = configureStore({
    reducer:{
        adi : alertGenerator
    },
})

export default store;