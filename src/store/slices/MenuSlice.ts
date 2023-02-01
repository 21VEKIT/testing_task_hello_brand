import {createSlice} from "@reduxjs/toolkit";
import {IMenu} from "../../types/IMenu";
import product1 from '../../components/Menu/images/menu_item1.png'
import product2 from '../../components/Menu/images/menu_item3.png'
import product3 from '../../components/Menu/images/menu_item2.png'

const initialState:IMenu[] = [
    {title: 'LEKKER ETEN', description: 'Eten gaat niet over indruk maken op mensen. Het gaat erom dat ze zich op hun gemak voelen. Dat is onze filosofie, goed eten in een goede sfeer.', photo: product1},
    {title: 'TOFFE AMBIANCE', description: 'Het creëren van de juiste sfeer is zeer belangrijk voor ons. We nemen onze tijd om te zorgen dat alle elementen bijdragen aan de juiste setting.', photo: product2},
    {title: 'LEKKERE COCKTAILS', description: 'Ons doel is simpel: een gastvrije plek bieden waar u kunt genieten van een onvergetelijke cocktail, een goed gesprek en lekker eten.', photo: product3}
]

const MenuSlice = createSlice({
    name: '@menu',
    initialState,
    reducers: {

    }
})

export default MenuSlice.reducer