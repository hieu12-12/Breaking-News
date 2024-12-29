import { useState } from "react"

const Navbar = () =>{
    const [open, setOpen] = useState(false);
    return{

        <div className="w-full h-16 md:h-20 flex items-center justify-between">
        // LOGO
            <Link to='/' className="flex items-center gap-4 text-2xl font-bold">
                <img src="logo.png" className="w-8 h-8" alt="" />
                <span>lamalog</span>
            </Link>
        {/*MOBILE MENU */}        
        <div className="md:hidden">
        // MOBILE BUTTON
        </div>

        <div 
        className="cursor-pointer text-4xl" onClick={() =>setOpen((prev)=> !prev)}> 
        {open ? "x":"m"}

        </div>
        
        </div>
        // MOBILE LINK LIST
        <div  className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-absolute top-16 
        bg-red-700 transition-all ease-in-out ${open ? "-right-0":"-right-[100%]"}`}>
        menu
        </div>
        
        
        <div className="hidden md:flex items-center group">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="">
        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login
        </button></Link>
        
        </div>
        
        </div>
        {/*Desktop MENU */}  
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="">
        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 
        </button>
        </Link></div>
        </div>
    }
}
export default Navbar;