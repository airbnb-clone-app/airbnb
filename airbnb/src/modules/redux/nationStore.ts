import { configureStore } from "@reduxjs/toolkit";
import nationReducer from "./slice/nationSlice";
export const nationStore=configureStore({
    reducer:{
        nation:nationReducer
    }
})

export type RootState=ReturnType<typeof nationStore.getState>;
export type AppDispatch=typeof nationStore.dispatch;