import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolDetail = () => {
    const {_id} = useParams();
    const [tool, setTool] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/tool/${_id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTool(data));
    }, [])
   

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={tool.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{tool.name}</h2>
            <p>{tool.description}</p>
            <p>Available Quantity: {tool.availableQuantity}</p>
            <p>Minimum Order: {tool.minOrder}</p>
            <p>${tool.price}/unit</p>
            <div className="card-actions">
                <button className="btn btn-primary">Place Order</button>
            </div>
        </div>
    </div>
    );
};

export default ToolDetail;