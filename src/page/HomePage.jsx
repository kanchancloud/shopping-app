import React, {useEffect} from 'react';
import {Card, Button} from "react-bootstrap";
import axios from "axios";
import './Page.css';
import {useSelector, useDispatch} from "react-redux";
import {setProduct, AddCart} from "../redux/action/Action";
import {Link, useNavigate} from "react-router-dom";



export const baseUrl = "https://fakestoreapi.com/products";


const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.AllProduct.product);
    const productQuantity = useSelector((state) => state.AllProduct.numberCart);
    const loggedInStatus = useSelector((state) => state.userReducer.loggedIn)
    const history = useNavigate()

    // useEffect(() => {
    //     if(!loggedInStatus) {
    //         history("/")
    //     }
    // })

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            // console.log(response)
            dispatch(setProduct(response.data));
        });
    }, []);

    const productHandle = (product) => {
        dispatch(AddCart(product));
    }

    useEffect(() => {
        console.log(productQuantity)
    }, [productQuantity])

    const productListing = products?.map((product) => {
        const {title, image, price, category, description} = products;

        return (
                <Card style={{}} className="items">
                    <img className="img" src={product.image} alt="image"/>
                    <Card.Body className="data">
                        <Card.Title className="title">{product.title}</Card.Title>
                        <Card.Subtitle className="category">{product.category}</Card.Subtitle>
                        <Card.Text>
                            ${product.price}
                        </Card.Text>
                        <Button size="sm" className="item-button"
                                onClick={() => productHandle(product)}>
                            <Link to="/OrderPage"><span>add to cart</span></Link>
                        </Button>
                    </Card.Body>
                </Card>
        );

    });
    return (
        <div className={'ProductWrapper'}>
            {productListing}
        </div>
    )

}

export default HomePage;
