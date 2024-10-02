import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {data: tools, isLoading} = useQuery('tools', () => fetch(`${process.env.REACT_APP_BASE_URL}/tool`).then(res=>res.json()))

    const imageStorageKey = '20c82070c04df14e6bfa8f49fdd61b5e';

    const onSubmit = async data => {
       const image = data.img[0];
       const formData = new FormData();
       formData.append('image', image);
       const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
       fetch(url, {
           method: 'POST',
           body: formData
       })
       .then(res => res.json())
       .then(result => {
           if(result.success){
               const img = result.data.url;
               const product = {
                name: data.name,
                description: data.description,
                availableQuantity: data.availableQuantity,
                minOrder: data.minOrder,
                price: data.price,
                img: img
            }
            // Sending to our database
            fetch(`${process.env.REACT_APP_BASE_URL}/tool`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(product)
            })
            .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Product added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the product');
                    }
                })
            
           }
       })
    
    }

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-2xl">Add A New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <input
        type="text"
        placeholder="Tool Name"
        className="input input-bordered w-full max-w-xs"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Description</span>
    </label>
    <textarea
        type="text"
        placeholder="Tool Description"
        className="input input-bordered w-full max-w-xs"
        {...register("description", {
            required: {
                value: true,
                message: 'Description is Required'
            },
        })}
    />
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Available Quantity</span>
    </label>
    <input
        type="number"
        placeholder="Available Quantity"
        className="input input-bordered w-full max-w-xs"
        {...register("availableQuantity", {
            required: {
                value: true,
                message: 'Available quantity is Required'
            }
        })}
    />
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Minimum Order</span>
    </label>
    <input
        type="number"
        placeholder="Minimum Order Quantity"
        className="input input-bordered w-full max-w-xs"
        {...register("minOrder", {
            required: {
                value: true,
                message: 'Minimum order is Required'
            }
        })}
    />
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Price($)</span>
    </label>
    <input
        type="number"
        placeholder="Price/Piece"
        className="input input-bordered w-full max-w-xs"
        {...register("price", {
            required: {
                value: true,
                message: 'Minimum order is Required'
            }
        })}
    />
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Image</span>
    </label>
    <input
        type="file"
        className="input input-bordered w-full max-w-xs"
        {...register("img", {
            required: {
                value: true,
                message: 'Image is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>






<input className='btn w-full max-w-xs text-white mt-4' type="submit" value="Add" />
</form>
            
        </div>
    );
};

export default AddProduct;