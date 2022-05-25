import React from 'react';

const BusinessSummary = () => {
    return (
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        
        <div className='font-bold text-5xl text-center'>19K <br /><span className='text-2xl'>CUSTOMERS</span> <div class="divider lg:divider-horizontal"></div> </div>
        <div className='font-bold text-5xl text-center'>144K <br /><span className='text-2xl'>ITEMS SOLD</span> <div class="divider lg:divider-horizontal"></div> </div>
        <div className='font-bold text-5xl text-center'>150+ <br /><span className='text-2xl'>PARTNERS</span> <div class="divider lg:divider-horizontal"></div> </div>
        <div className='font-bold text-5xl text-center'>4K <br /><span className='text-2xl'>REVIEWS</span> <div class="divider lg:divider-horizontal"></div> </div>
      
      </div>
    );
};

export default BusinessSummary;