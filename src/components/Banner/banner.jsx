import React from 'react';
import image from '../../assets/banner.png'
import './banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div className='z-10 text-white text-center inset-center w-9/12'>
                <h1 className='text-5xl font-bold mb-5 leading-tight'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='font-light'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='mt-7'>
                    <button className='rounded-full btn bg-[#0BE58A] border-none px-6 font-semibold text-base mr-3'>Explore Now</button>
                    <button className='rounded-full btn text-white border-white btn-outline px-6 font-semibold text-base ml-4'>Explore Now</button>
                </div>
            </div>

            <img className='w-full' src={image} alt="" />

            
        </div>
    );
};

export default Banner;