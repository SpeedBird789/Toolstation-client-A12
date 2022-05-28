import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ background: `url(https://i.ibb.co/gD4RPjc/banner.jpg)` }}>
      <div className="hero-overlay bg-opacity-25"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-red-200">ToolStation <br /> <small className='text-xl text-white'>The largest Manufacturer Company of tools</small> </h1>
          <p className="mb-5 text-white">Your go-to place for all sorts of tools and parts. We have been serving our customers for over 20+ years now and one thing that has always stayed constant over the years is our SERVICE. Welcome to your own place of comfort!</p>
          <button className="btn btn-primary">Explore </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;