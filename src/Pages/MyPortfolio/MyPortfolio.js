import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className='bg-slate-100 pt-5 pb-36'>
           <div className='ml-8 font-serif'>
           Hi, <span className='text-2xl font-bold'>SpeedBird</span> here.
           <br /> 
           Email: speedbird71@gmail.com
           <br />
           Education: Never got the opportunity to go to school
           <br />
           So far, I've learned:
           <li className='mt-4'>HTML</li>
           <li>CSS</li>
           <li>BOOTSTRAP</li>
           <li>TAILWIND</li>
           <li>JAVASCRIPT</li>
           <li>REACT</li>
           <li>MONGODB</li>
           </div>

           <div className='font-serif ml-8 mt-5'>Links to 3 of my other projects: <br />
           <a className="link link-hover no-underline text-2xl" href="https://independent-service-prov-374f1.web.app/">AvgeekClicks</a>
           <br />
           <a href='https://warehouse-management-87a78.web.app/' className="link link-hover no-underline text-2xl">Warehouse Management</a>
           <br />
           <a className="link link-hover no-underline text-2xl" href="https://product-analysis-789.netlify.app/">Best Buy</a>
           </div>

        </div>
    );
};

export default MyPortfolio;