import React from 'react';

const Tool = ({tool}) => {
    const {name, img, price, description, minOrder, availableQuantity} = tool;

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
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;