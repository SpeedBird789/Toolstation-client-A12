import React from 'react';
import notFound404 from '../../../src/images/NotFound404.jpg';

const NotFound404 = () => {
    return (
        <div className='container pt-2'>
            <img className='w-full h-96' src={notFound404} alt="" />
        </div>
    );
};

export default NotFound404;