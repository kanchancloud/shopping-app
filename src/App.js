import Header from "./component/Header";
import HomePage from "./page/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OrderPage from './page/OrderPage';
import LoginProvider from "./contextApi";
import {Login} from './auth/Login';
import {Register} from './auth/Register';
import React from "react";
import {useSelector} from "react-redux";



function App() {
    const loggedInStatus = useSelector((state) => state.userReducer.loggedIn)
    let HideHeader = !loggedInStatus ? null : <Header />
    return (
        <div className="App">
            <BrowserRouter>
                {HideHeader}
                    <Routes>
                        <Route path="HomePage" exact element={<HomePage/>}/>
                        <Route path="OrderPage" element={<OrderPage/>}/>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/Register" element={<Register/>}/>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
