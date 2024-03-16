import React from 'react';

const Cook_Table = () => {
    return (
        <div className='rounded-xl border border-[#28282833] h-full'>
            <div>
                <h3 className='font-semibold text-xl text-[#282828] text-center mt-7 pb-3 border-b border-[#28282826] mx-auto max-w-xs'>Want to cook: 01</h3>
                <table className='table-auto mt-5 font-medium text-sm'>
                    <thead>
                        <tr className='*:p-4'>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-[#28282808] *:p-4'>
                            <td>1</td>
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                            <td><button className='rounded-full bg-[#0BE58A] border-none px-4 py-2 font-semibold text-base mt-2'>Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cook_Table;