import { CgProfile } from "react-icons/cg";


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 my-7">
                <div className="navbar-start">
                    <a className=" text-2xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-9 font-normal text-base text-[#150B2BB3] px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>  
                <div className="navbar-end gap-3">
                    {/* <input className="p-3 rounded-full border" type="text" placeholder="Search" /> */}
                    <label className="input rounded-full bg-[#150B2B0D] flex items-center gap-2">
                        <input type="text" className="grow md:block hidden" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <a className="btn btn-circle bg-[#0BE58A] text-2xl"><CgProfile /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;