import React from 'react';

const Recipe = () => {
    return (
        <div className="p-5 border border-[#28282833] rounded-2xl">
            <figure className="">
                <img src="https://i.postimg.cc/0QGvLdBL/Rectangle-20170.png" alt="Shoes" className="rounded-xl w-full h-60 lg:h-44 object-cover" />
            </figure>
            <div className="">
                <h2 className="mt-5 text-[#282828] font-semibold text-lg mb-3">Spaghetti Bolognese</h2>
                <p className='font-normal text-[#878787] text-sm pb-3 border-b border-[#2828281A] font-fira'>Classic Italian pasta dish with savory meat sauce.</p>
                <div className='mt-5'>
                    <h4 className='font-medium text-base'>Ingredients: 6</h4>
                    <ul className='text-[#878787] text-base font-normal mt-3 pb-3 border-b border-[#2828281A] font-fira list-disc *:ml-5'>
                        <li >500g ground beef</li>
                        <li>1 onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                    </ul>
                </div>
                <div className='text-[#282828CC] text-base font-normal font-fira flex items-center gap-5 mt-5 mb-2'>
                    <div className="flex items-center gap-2">
                        <LuClock3 />
                        <p>30 minutes</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="text-lg"><RiFireLine /></div>
                        <p>600 calories</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button className='rounded-full btn bg-[#0BE58A] border-none px-6 font-semibold text-[#150B2B] text-base mt-2'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;