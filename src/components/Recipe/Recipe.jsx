import { LuClock3 } from "react-icons/lu";
import { RiFireLine } from "react-icons/ri";



const Recipe = ({ recipe, handleWantToCook }) => {
    const {name, image, description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className="p-5 border border-[#28282833] rounded-2xl">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl w-full h-60 lg:h-44 object-cover" />
            </figure>
            <div className="flex flex-col justify-between">
                <h2 className="mt-5 text-[#282828] font-semibold text-lg mb-3">{name}</h2>
                <p className='font-normal text-[#878787] text-sm pb-3 border-b border-[#2828281A] font-fira'>{description}</p>
                <div className='mt-5'>
                    <h4 className='font-medium text-base'>Ingredients: {ingredients.length}</h4>
                    <ul className='text-[#878787] text-base font-normal mt-3 pb-3 border-b border-[#2828281A] font-fira list-disc *:ml-5'>
                        {
                            ingredients.map((inge, idx) => <li key={idx}>{inge}</li>)
                        }
                    </ul>
                </div>
                <div className='text-[#282828CC] text-base font-normal font-fira flex items-center gap-5 mt-5 mb-2'>
                    <div className="flex items-center gap-2">
                        <LuClock3 />
                        <p>{preparing_time} minutes</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="text-lg"><RiFireLine /></div>
                        <p>{calories} calories</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button 
                        onClick={() => handleWantToCook(recipe)}
                        className='rounded-full btn bg-[#0BE58A] border-none px-6 font-semibold text-[#150B2B] text-base mt-2'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;