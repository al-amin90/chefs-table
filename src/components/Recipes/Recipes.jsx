import { LuClock3 } from "react-icons/lu";
import { RiFireLine } from "react-icons/ri";
import Cook_Table from "../Cook_Table/Cook_Table";


const Recipes = () => {
    return (
        <div className='my-20'>
            <div className='mx-auto md:w-9/12 text-center'>
                <h1 className='text-[#150B2B] text-3xl font-semibold'>Our Recipes</h1>
                <p className='text-sm md:text-base font-normal text-[#150B2B99] mt-7'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>   
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-5 mt-10'>
                <div className='col-span-7 grid md:grid-cols-2 grid-cols-1 gap-5' >      
                    
                </div>
                <div className='col-span-5 mt-5 lg:mt-0'>
                    <Cook_Table></Cook_Table>
                </div>
            </div>
        </div>
    );
};

export default Recipes;