



const Cook_Table = ({ wantToCook, handlePreparing, currentlyCooking }) => {

    

    return (
        <div className='rounded-xl border border-[#28282833] h-full'>
            <div>
                <h3 className='font-semibold text-xl text-[#282828] text-center mt-7 pb-3 border-b border-[#28282826] mx-auto max-w-xs'>Want to cook: {wantToCook.length}</h3>
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
                        {
                            wantToCook.map((c, idx) => {
                                return <tr key={idx} className='bg-[#28282808] *:p-1 *:py-5 md:py-0 md:*:p-4 font-fira'>
                                    <td className='text-[#282828CC] font-semibold'>{idx+1}</td>
                                    <td>{c.name}</td>
                                    <td>{c.preparing_time} minutes</td>
                                    <td>{c.calories} calories</td>
                                    <td><button
                                        onClick={() => handlePreparing(c.id)}
                                        className='rounded-full hover:bg-gray-300 bg-[#0BE58A] border-none px-4 py-2 font-semibold text-xs md:text-base mt-2 text-[#150B2B]'>Preparing</button></td>
                                </tr>
                            })
                        }

                        
                    </tbody>
                </table>
            </div>

            {/* Currently cooking is here  */}
            <div>
                <h3 className='font-semibold text-xl text-[#282828] text-center mt-7 pb-3 border-b border-[#28282826] mx-auto max-w-xs'>Currently cooking: {currentlyCooking.length}</h3>
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
                        {
                            currentlyCooking.map((cooking, idx) => {
                                return <tr key={idx} className='bg-[#28282808] *:p-4 font-fira'>
                                    <td className='text-[#282828CC] font-semibold'>{idx+1}</td>
                                    <td>{cooking.name}</td>
                                    <td>{cooking.preparing_time} minutes</td>
                                    <td>{cooking.calories} calories</td>
                                </tr>
                            })
                        }
                


                        {/* final output  */}
                        <tr className='bg-[#28282808] font-medium *:p-4'>
                            <td></td>
                            <td></td>
                            <td>Total Time = {currentlyCooking.reduce((p, c) => p + c.preparing_time, 0)} minutes
                            </td>
                            <td>Total Calories = {currentlyCooking.reduce((p, c) => p + c.calories, 0)} calories
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cook_Table;