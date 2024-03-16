import { useEffect, useState } from "react";
import Cook_Table from "../Cook_Table/Cook_Table";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {

    const [recipes, setRecipes] = useState([])
    const [wantToCook, setWantToCook] = useState([])
    const [currentlyCooking, setCurrentlyCooking] = useState([])

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const handleWantToCook = (recipe) => {
        const isWantToCook = wantToCook.find(c => c.id === recipe.id);
        
        if (!isWantToCook) {
            setWantToCook([...wantToCook, recipe]);
            console.log("paici mama", isWantToCook);
        }
    }

    const handlePreparing = (id) => {
        const remainPreparing = wantToCook.filter(p => p.id !== id)
        setWantToCook(remainPreparing);

        const cooking = wantToCook.find(p => p.id === id);
        setCurrentlyCooking([...currentlyCooking, cooking]);

        console.log(currentlyCooking);
    }

    return (
        <div className='my-20'>
            {/* our recipe title and description  */}
            <div className='mx-auto md:w-9/12 text-center'>
                <h1 className='text-[#150B2B] text-3xl font-semibold'>Our Recipes</h1>
                <p className='text-sm md:text-base font-normal text-[#150B2B99] mt-7'>Dive into a culinary adventure with Our Recipes, where you'll discover an eclectic assortment of mouthwatering dishes spanning various cuisines and culinary traditions.</p>   
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-5 mt-10'>
                <div className='col-span-7 grid md:grid-cols-2 grid-cols-1 gap-5' >      
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.id}
                            handleWantToCook = {handleWantToCook}
                            recipe={recipe}
                        ></Recipe>) 
                    }
                    
                </div>
                <div className='col-span-5 mt-5 lg:mt-0'>
                    <Cook_Table
                        wantToCook={wantToCook}
                        handlePreparing={handlePreparing}
                        currentlyCooking = {currentlyCooking}
                    ></Cook_Table>
                </div>
            </div>
        </div>
    );
};

export default Recipes;