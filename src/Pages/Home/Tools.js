import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://toolstation-server-a12-ve89a8ziv-asif-mahmouds-projects.vercel.app/tool')
        .then(res => res.json())
        .then(data => setTools(data))
    })
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary  text-2xl font-bold uppercase'>Our Tools</h2>
                <h3 className='text-3xl'>Get the best tools for your DIY or any other needs</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.slice(-6).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;