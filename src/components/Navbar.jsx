import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    
  return (
    <nav className="z-10 top-0 flex justify-between items-center h-24 max-w-100vh mx-auto px-4 text-blue font-bold bg-black">
        <div onClick={handleNav} className="block md:hidden" >
            {!nav ? <AiOutlineClose size={20} color='#000' /> : <AiOutlineMenu size={20} color='#fff'/>}
        </div>
          <ul className="hidden md:flex text-white p-8 text-2xl font-thin items-center">
            <Link to="/"><li className="p-4 hover:text-red-800 hover:scale-105 duration-300">Home</li></Link>
            <Link to="/memberz"><li className="p-4 hover:text-red-800 hover:scale-105 duration-300">MemberZ</li></Link>
            <Link to="/albumz"><li className="p-4 hover:text-red-800 hover:scale-105 duration-300">Albumz</li></Link>
            <Link to="/showz"><li className="p-4 hover:text-red-800 hover:scale-105 duration-300">ShowZ</li></Link>
            <Link to='/contact'><li className="p-4 hover:text-red-800 hover:scale-105 duration-300">Contact</li></Link>
          
          </ul>
      <div className="content-between">  
        <img src='zlogo2.jpg' className="ml-auto rounded-full max-w-[15%]" />
        <div className={!nav ? "fixed left-0 top-0 w-[100%] h-full text-center p-8 bg-gradient-to-r from-black to-red-800 border-r border-r-gray-900 bg-purple-100 ease-in-out duration-200" : "fixed left-[-100%]"}>
          <ul className=" text-white">
              <button className="flex" onClick={handleNav}>X</button>
              <div className="text-2xl font-thin">
                <Link to='/'><li onClick={handleNav} className="p-8 border-b border-gray-600">Home</li></Link>
                <Link to="/memberz"><li onClick={handleNav} className="p-8 border-b border-gray-600">MemberZ</li></Link>
                <Link to="/albumz"><li onClick={handleNav} className="p-8 border-b border-gray-600">AlbumZ</li></Link>
                <Link to="/showz"><li onClick={handleNav} className="p-8 border-b border-gray-600">ShowZ</li></Link>
                <Link to='/contact'><li onClick={handleNav} className="p-8 border-b border-gray-600">Contact</li></Link>
              </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar