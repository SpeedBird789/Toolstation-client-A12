import React from 'react';
import {useNavigate} from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id, name, img, price, description, minOrder, availableQuantity} = tool;
    const navigate = useNavigate();

    const navigateToToolDetail = _id =>{
        navigate(`/tool/${_id}`);
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order: {minOrder}</p>
                <p>${price}/unit</p>
                <div className="card-actions">
                    <button onClick={() => navigateToToolDetail(_id)} className="btn btn-primary">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;