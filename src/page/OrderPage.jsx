import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DecreaseQuantity,IncreaseQuantity, DeleteCart} from '../redux/action/Action';
import {useNavigate} from "react-router-dom";




const OrderPage = () => {
    const  items = useSelector((state)=>state.AllProduct);
    const dispatch = useDispatch();
  const history=useNavigate();
    const loggedInStatus = useSelector((state) => state.userReducer.loggedIn)

    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item])
    })

    // useEffect(() => {
    //     if(!loggedInStatus) {
    //         history("/")
    //     }
    // })

    function  TotalPrice(price,cart){

        return Number(price * cart).toLocaleString('en-US')
    }

    return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            ListCart.map((item,key)=>{
                            return (
                            <tr key={key}>
                            <td><i className="DeleteItem" onClick={()=>dispatch(DeleteCart(key))}>x</i></td>
                            <td>{item.title}</td>
                            <td><img src={item.image} alt="img" style={{width: '100px', height: '80px'}}/></td>
                            <td>{item.price}</td>
                            <td>
                            <span className="btn btn-primary" style={{margin: '2px'}} onClick={()=> dispatch(DecreaseQuantity(key))}>-</span>
                            <span className="btn btn-info">{item.quantity}</span>
                            <span className="btn btn-primary" style={{margin: '2px'}}
                            onClick={()=> dispatch(IncreaseQuantity(key))}>+</span>
                            </td>
                            <td>{ TotalPrice(item.price,item.quantity)}</td>
                            </tr>
                            )
                        })
                        }
                        <tr>
                            <td colSpan="5">Total Carts</td>
                            <td>{Number(TotalCart).toLocaleString('en-us')}$</td>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>



    )
};


export default OrderPage;