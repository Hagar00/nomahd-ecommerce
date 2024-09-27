import React, { useState } from 'react'

import NavbarLinks from './NavbarLinks';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (

    <nav className="bg-transparent " >
      <div className="flex items-center font-medium justify-between ml-9 mr-9">
        <h4>Nomahd</h4>
        <div className="text-lg md:hidden" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </div>
        <ul className={`md:flex hidden uppercase items-center gap-8 font-[Poppins]`}>
          <li>
            <Link to="/" className="py-3 px-3 inline-block">Home</Link>
          </li>
          <NavbarLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
          
        </div>
      </div>
      {/* Mobile nav */}
      <ul className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 transition-transform duration-500 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <li>
          <Link to="/" className="py-3 px-3 inline-block">Home</Link>
        </li>
        <NavbarLinks />
        <div className="py-5">
         <Button/>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar