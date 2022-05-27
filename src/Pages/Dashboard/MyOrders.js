import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if(res.status===401 || res.status=== 403){
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div>
            <h2>My orders: {orders.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Item</th>
                            <th>Price/Piece</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                   
                    <tbody>
                        {
                            orders.map((order, index) =>  <tr>
                                <th>{index+1}</th>
                                <td>{order.name}</td>
                                <td>{order.toolName}</td>
                                <td>${order.price}</td>
                                <td>{order.quantity}</td>
                                <td>${order.price*order.quantity}</td>
                            </tr> )
                        }
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;