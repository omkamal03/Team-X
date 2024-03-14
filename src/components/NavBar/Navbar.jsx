import React, { useState,useContext } from 'react';
import { IoLogoBitbucket } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';
import { NavLink,Link } from 'react-router-dom';



function Navbar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
    const [isOpen, setIsOpen] = useState(false);
    const [menu,setMenu]=useState(false)
    const [mode,setMode]=useState("Light")
    const {themeMode,darkMode,lightMode}=useContext(ShopContext)
    const changeMode=()=>{
        if(themeMode==='light'){
            darkMode();
            setMode("Light")
            console.log("darkMOde on")
        }
        else{
            lightMode();
            console.log("lightMode")
            setMode("Dark")
        }
    }

    return (
       <nav className={`fixed w-screen shadow-xl z-50 h-20 flex md:justify-between justify-around items-center  gap-8 md:gap-2  px-12 md:px-24 py-5 bg-cyan-300 dark:bg-black`}>
         <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='dark:text-white text-black text-3xl md:hidden'/>
           <section className='flex gap-3 items-center'>
           <IoLogoBitbucket className='text-3xl text-black dark:text-cyan-500 cursor-pointer' />
            <h2 className='dark:text-white text-black font-bold font-serif text-4xl'>DROP</h2>
          
           </section>
           <div className={`md:hidden fixed  transition-transform  duration-75 ease-in-out h-full w-screen top-0 right-0 ${isOpen?"translet-x-full  bg-black/50  backdrop-blur-sm":"-translate-x-full"}`}>
               <section className='dark:text-white dark:bg-slate-900 text-black bg-cyan-900  left-0 top-0 h-screen w-56 p-8 gap-8 z-50 '>
               <IoMdCloseCircle onClick={() => setIsOpen(!isOpen)} className='text-3xl cursor-pointer text-black  dark:text-white' />
               <ul className='flex flex-col gap-5 my-10'>
                  <li className='text-lg cursor-pointer bg-black px-8 py-1 font-medium text-white text-center hover:bg-cyan-500 w-full' >
                  <NavLink to="/" onClick={scrollToTop} >
                                    Shop
                                </NavLink></li>
                  <li className='text-lg cursor-pointer bg-black px-8 py-1 font-medium text-white text-center hover:bg-cyan-500 w-full'> <NavLink to="/men" onClick={scrollToTop} >
                                    Men
                                </NavLink></li>
                  <li className='text-lg cursor-pointer bg-black px-8 py-1 font-medium text-white text-center hover:bg-cyan-500 w-full'> <NavLink to="/women" onClick={scrollToTop} >
                                    Women
                                </NavLink></li>
                  <li className='text-lg cursor-pointer bg-black px-8 py-1 font-medium text-white text-center hover:bg-cyan-500 w-full'><NavLink to="/kids" onClick={scrollToTop} >
                                    Kids
                                </NavLink></li>
               </ul>
               </section>
              
              
           </div>
           <ul className='hidden md:flex items-center pl-16 gap-12'>
             <li className='text-lg cursor-pointer font-medium text-black dark:text-white hover:border-b-4 dark:border-cyan-500 border-red-500'><NavLink
                                to="/" onClick={scrollToTop}
                                    className={({isActive}) =>
                                        ` ${isActive ? "text-red-600 dark:text-cyan-500 font-bold" : ""}`
                                        
                                    }
                                >
                                    Shop
                                </NavLink></li>

             <li className='text-lg cursor-pointer font-medium text-black dark:text-white hover:border-b-4 dark:border-cyan-500 border-red-500'><NavLink
                                to="/men" onClick={scrollToTop}
                                    className={({isActive}) =>
                                        ` ${isActive ? "text-red-600  dark:text-cyan-500 font-bold" : ""}`
                                        
                                    }
                                >
                                    Mens
                                </NavLink></li>
             <li className='text-lg cursor-pointer font-medium text-black dark:text-white hover:border-b-4 dark:border-cyan-500 border-red-500'><NavLink
                                to="/women" onClick={scrollToTop}
                                    className={({isActive}) =>
                                        ` ${isActive ? "text-red-600 dark:text-cyan-500 font-bold" : ""}`
                                        
                                    }
                                >
                                    Women
                                </NavLink></li>
             <li className='text-lg cursor-pointer font-medium text-black dark:text-white hover:border-b-4 dark:border-cyan-500 border-red-500'><NavLink
                                to="/kids" onClick={scrollToTop}
                                    className={({isActive}) =>
                                        ` ${isActive ? "text-red-600 dark:text-cyan-500 font-bold" : ""}`
                                        
                                    }
                                >
                                    Kids
                                </NavLink></li>
           </ul>
           <div className='flex items-center gap-6'>
              <div>
              <NavLink  to="/cart" onClick={scrollToTop}
                                    className={({isActive}) =>
                                        ` ${isActive ? " dark:text-cyan-500 " : ""}`
                                        
                                    }><FaShoppingCart className='dark:text-white relative text-black text-3xl cursor-pointer hover:scale-110' /></NavLink>    
                  
               </div>
           <BsThreeDotsVertical onClick={()=>setMenu(!menu)} className='dark:text-white text-black  text-3xl relative cursor-pointer hover:scale-110'/>
           <section className={`flex  flex-col  ${menu?"":"hidden"} absolute right-10 z-50 top-16 w-44 bg-slate-900 dark:bg-cyan-900  items-center gap-6 p-5`}>
                  <Link to="/login"> <button onClick={scrollToTop} className=' text-white  text-lg font-medium hover:bg-cyan-500 w-full '>Login</button></Link>
                  <Link to="/signin"> <button  onClick={scrollToTop} className='text-white text-lg font-medium hover:bg-cyan-500 w-full'>Signup</button></Link>
                   <button onClick={changeMode} className='text-white text-lg font-medium hover:bg-cyan-500 w-full'>Enable {mode} mode</button>
                   <NavLink onClick={scrollToTop} to="/wishlist"><button className='text-white text-lg font-medium hover:bg-cyan-500 w-full'>My Wishlist</button></NavLink>      
            </section>
            </div>
           
           
  
       </nav>
    );
}

export default Navbar;
