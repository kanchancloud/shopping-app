import React, {useEffect, useState} from 'react';
import './component.css';
import {Navbar, Container, Nav, Form, FormControl, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { setLoginStatus} from "../redux/action/Action";
import {signOut} from "firebase/auth";
import {auth} from "../FirebaseConfig";


const Header=()=> {
    const[search,setSearch]=useState();
    const dispatch = useDispatch();
    const productQuantity = useSelector((state) => state.AllProduct.numberCart);
    const searchItem = useSelector((state) => state.AllProduct.product);

    const logout = async (e) => {
        console.log(e)
        e.preventDefault();
        await signOut(auth);
        dispatch(setLoginStatus(false))
    }


    const SearchHandle=(e)=>{
        const data=e.target.value;
        console.log(data)
        setSearch(data)
        // dispatch(setProduct(searchItem))
    }
    return (
        <>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="orange" variant="light" className="Header">
                    <Container>
                        <Navbar.Brand href="/HomePage">app</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="OrderPage" className={"cart"}>
                                    <img src="IconImg.jpg" alt="img" className="icon"/>
                                    {productQuantity}</Nav.Link>

                            </Nav>
                            <Nav>
                                <Nav.Link href="#" onClick={logout}>LogOut</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;