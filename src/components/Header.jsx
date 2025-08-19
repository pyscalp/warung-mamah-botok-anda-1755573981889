import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentang' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Kontak', path: '/kontak' },
  ];

  return (
    <header className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-accent">
          Mamah Botok
        </NavLink>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className={`md:flex md:space-x-8 absolute md:static bg-primary md:bg-transparent w-full left-0 py-4 md:py-0 transition-all duration-300 ease-in ${isOpen ? 'top-16 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 px-4 text-lg hover:text-accent transition-colors duration-200 ${isActive ? 'text-accent font-semibold' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;