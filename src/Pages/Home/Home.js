import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Banner from './Banner';
import Newsletter from './Newsletter';
import Testimonials from './Testimonials';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-20'>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Testimonials></Testimonials>
            </div>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;