import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const ToolDetail = ({ tools, setTools }) => {
    // const {name} = tools;
    const { _id } = useParams();
    const [tool, setTool] = useState({});
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `${process.env.REACT_APP_BASE_URL}/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
                toast(`Your Order Is Placed!`);
        })
    };


    useEffect(() => {
        const url = `${process.env.REACT_APP_BASE_URL}/tool/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [])

    return (
        <div className='flex grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl float-none ml-16 mr-8 mb-16">
                <figure className="px-10 pt-10">
                    <img src={tool.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold">{tool.name}</h2>
                    <p className='font-serif'>{tool.description}</p>
                    <p className='text-xl'>Available Quantity: {tool.availableQuantity}</p>
                    <p className='text-warning text-2xl font-bold'>${tool.price}/unit</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-info font-bold">Minimum Order: {tool.minOrder} </button>
                    </div>
                </div>
            </div>

            <div className='w-50 mx-auto'>
                <h2 className='text-2xl font-bold text-center mb-3'>Confirm Order</h2>
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Name'  value={user?.displayName || ''} {...register("name")} />
                    <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Email'  value={user?.email || ''} {...register("email")} />
                    <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Address' {...register("address")} />
                    <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Phone Number' {...register("phone")} />
                    <label>Enter the name of this tool:</label>
                    <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Tool Name' type="text" {...register("toolName")} />
                    <label>Enter the price of this tool ($):</label>
                    <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Order Quantity' type="number" {...register("quantity")} />
                    <input className='btn btn-secondary w-full max-w-xs' value='Place Order' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default ToolDetail;