import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import RestaurantsSlice from "./slices/RestaurantsSlice";
import MenuSlice from "./slices/MenuSlice";

const rootReducer = combineReducers({
    restaurants: RestaurantsSlice,
    menu: MenuSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch