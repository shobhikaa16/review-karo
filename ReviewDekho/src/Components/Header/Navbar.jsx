import React from 'react';
import NavbarOne from './NavbarOne';
import Navbartwo from './Navbartwo';

//The Navbar component is a wrapper that combines two separate navbar components
function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white">
      <NavbarOne />
      <Navbartwo />
    </div>
  );
}

export default Navbar;
