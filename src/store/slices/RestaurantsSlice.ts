import {createSlice} from "@reduxjs/toolkit";
import {IRestaurants} from "../../types/IRestaurants";

const initialState = [
    {title: 'Woensdag 12/01', street: 'Salade met Serrano', name: 'Steak Tartaar'},
    {title: 'Donderdag 13/01', street: 'Toast Roquefort', name: 'Penne met Kip en Prei'},
    {title: 'Vrijdag 14/01', street: 'Verrassing van de Chef', name: 'Penne met Kip en Prei'},
    {title: 'Vrijdag 15/01', street: 'Verrassing van de Chef', name: 'Penne met Kip en Prei'},
    {title: 'Vrijdag 16/01', street: 'Verrassing van de Chef', name: 'Penne met Kip en Prei'}
] as IRestaurants[]

const RestaurantsSlice = createSlice({
    name: '@restaurant',
    initialState,
    reducers: {

    }
})

export const {} = RestaurantsSlice.actions
export default RestaurantsSlice.reducer