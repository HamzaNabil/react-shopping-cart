import React, { useEffect } from 'react';
import { fetchOrders } from '../store/actions/orders';
import { connect } from 'react-redux';
import "../css/Orders.css"

function Orders(props) {

    useEffect( () => {
        props.fetchOrders()
    }, [])

    const {orders} = props;

    return (
        <div className="orders">
            <table>
                <thead>
                    <tr>
                        <th> id </th>
                        <th> name </th>
                        <th> email </th>
                        <th> items </th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{props.cartItems.map(p => (
                                <p> {p.title} , qty: {p.qty}</p>
                            ))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default connect((state) =>{
    return {
        orders: state.order.orders,
        cartItems: state.cart.cartItems
    }
} , { fetchOrders })(Orders)