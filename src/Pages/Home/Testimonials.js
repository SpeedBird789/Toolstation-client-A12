import React, { useEffect, useState } from 'react';
import quote from '../../../src/images/icons/quote.svg';
import Review from './Review';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/review`)
        .then(res => res.json())
        .then(data => setReviews(data))
    })

    
    return (
        <section className='my-28'>
        <div className='flex justify-between'>
            <div>
                <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                <h2 className='text-3xl'>What Our Customers Say</h2>
            </div>
            <div>
                <img src={quote} className="w-24 lg:w-48" alt="" />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review =><Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
        </div>
    </section>
    );
};

export default Testimonials;