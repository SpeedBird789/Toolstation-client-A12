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
            <div className='px-16'>
            <Tools></Tools>
            <Testimonials></Testimonials>
            <BusinessSummary></BusinessSummary>
            </div>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;