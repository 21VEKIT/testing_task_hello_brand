import React from 'react';
import MainPage from "./components/MainPage/MainPage";
import Restaurants from "./components/Restaurants/Restaurants";
import Reviews from "./components/Reviews/Reviews";
import Menu from "./components/Menu/Menu";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
        <MainPage />
        <Restaurants />
        <Reviews />
        <Menu />
        <Contacts />
    </div>
  );
}

export default App;
