import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Crud' },
    { id: 3, text: 'Todo' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' }
  ];

  const getRoute = (item) => {
    if (item === 'Home') {
      return '/'
    }
    else if (item === 'Crud') {
      return '/crud/create'
    } else {
      return `/${item.toLowerCase()}`
    }
  }

  return (
    <div className='bg-black flex justify-between items-center h-15 w-full px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-cyan-400'>P-VYAS</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='hover:text-cyan-400 rounded-xl m-4 cursor-pointer duration-300'
          >
            {/* <Link to={item.text == 'Home'? '/' :`/${item.text.toLowerCase()}`}>{item.text}</Link> */}
            {/* <Link to={item.text == 'Crud'? '/crud/create' :`/${item.text.toLowerCase()}`}>{item.text}</Link> */}
            <Link to={getRoute(item.text)}>{item.text}</Link>
            
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-cyan-400 m-4'>CRUD</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:text-cyan-400 duration-300 cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;