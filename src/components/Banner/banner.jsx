import React from 'react';
import image from '../../assets/banner.png'
import './banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div className='z-10 text-white text-center inset-center w-9/12'>
                <h1 className='text-base lg:text-5xl font-bold mb-5 leading-tight'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='font-light text-xs  md:text-base'>Embark on an extraordinary culinary journey with our personalized cooking classes! Discover an immersive experience, where expert chefs guide you through the intricacies of creating exquisite dishes.</p>
                <div className='lg:mt-7'>
                    <button className='rounded-full btn bg-[#0BE58A] border-none px-6 font-semibold text-base mt-2 md:mr-3'>Explore Now</button>
                    <button className='rounded-full btn text-white border-white btn-outline px-6 font-semibold text-base mt-2 md:ml-4'>Our Feedback</button>
                </div>
            </div>

            <img className='w-full md:h-auto h-[250px]' src={image} alt="" />

            
        </div>
    );
};

export default Banner;