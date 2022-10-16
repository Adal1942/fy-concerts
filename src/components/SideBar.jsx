import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri';
import { links } from '../assets/constants';
import logo from '../assets/logo-fy.png';
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
    <div className="mt-10">
        {links.map((item) => (
            <NavLink 
                key={item.name}
                to={item.to}
                className="flex flex-row justify-start items-center my-8 text-sm font-medium text-black"
                onClick={() => handleClick && handleClick()}>
                <item.icon className="w-6 h-6 mr-2"/>
                {item.name}
            </NavLink>
        ))}
    </div>
);

const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return(
        <>
        <div className="md:flex hidden flex-col w-[200px] border-r-2 border-r-neutral-300 py-5 px-4 bg-gradient-to-tl from-[#fdfbfb] to-[#ebedee]">
            <img src={logo} alt="logo" className="w-full h-24 object-contain"/>
            <NavLinks />
        </div>
        
        

        <div className="absolute md:hidden block top-4 right-3">
            {mobileMenuOpen ? (
                <RiCloseLine className="w-6 h-6 text-black mr-2" onClick={() => setMobileMenuOpen(false)}/>
            ): <HiOutlineMenu className="w-6 h-6 text-black mr-2" onClick={() => setMobileMenuOpen(true)}/>}
        </div>

        <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-[#fdfbfb] to-[#ebedee] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
            <img src={logo} alt="logo" className="w-full h-24 object-contain"/>
            <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
        </div>
        </>
    )
};

export default Sidebar;