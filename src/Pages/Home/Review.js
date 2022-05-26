import React from 'react';

const Review = ({review}) => {

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
            <div className="flex items-center">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} alt=""/>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>{review.name}, {review.location}</h4>
                    <p>{review.description}</p>
                    <div>
                    <div className="rating mt-2">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />                
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Review;