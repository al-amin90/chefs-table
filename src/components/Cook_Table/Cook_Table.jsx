import React from 'react';

const Cook_Table = () => {
    return (
        <div className='rounded-xl border border-[#28282833] h-full'>
            <div>
                <h3 className='font-semibold text-xl text-[#282828] text-center mt-7 pb-3 border-b border-[#28282826] mx-auto max-w-xs'>Want to cook: 01</h3>
                <table className='table-auto mt-2 w-full text-sm text-[#878787]'>
                    <thead>
                        <tr className='*:p-1 md:*:p-4 *py-3 md:py-0 text-left font-medium font-fira'>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-[#28282808] *:p-1 *:py-5 md:py-0 md:*:p-4 font-fira'>
                            <td className='text-[#282828CC] font-semibold'>1</td>
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                            <td><button className='rounded-full hover:bg-gray-300 bg-[#0BE58A] border-none px-4 py-2 font-semibold text-xs md:text-base mt-2 text-[#150B2B]'>Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Currently cooking is here  */}
            <div>
                <h3 className='font-semibold text-xl text-[#282828] text-center mt-7 pb-3 border-b border-[#28282826] mx-auto max-w-xs'>Currently cooking: 02</h3>
                <table className='table-auto mt-2 w-full text-sm text-[#878787]'>
                    <thead>
                        <tr className='text-left font-medium *:p-4 font-fira'>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-[#28282808] *:p-4 font-fira'>
                            <td className='text-[#282828CC] font-semibold'>1</td>
                            <td>Spaghetti Bolognese</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                        </tr>
                        <tr className='bg-[#28282808] font-medium *:p-4'>
                            <td></td>
                            <td></td>
                            <td>Total Time = <br />
                                45 minutes
                            </td>
                            <td>Total Calories = <br />
                                1050 calories
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cook_Table;