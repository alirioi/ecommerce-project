import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
  const {
    cartProducts,
    openCheckoutSideMenu,
    setSearchByCategory,
    isMenuOpen,
    setIsMenuOpen,
  } = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex flex-wrap items-center justify-between fixed z-50 top-0 w-full py-5 px-4 sm:px-8 text-md font-light bg-white shadow-md">
      {/* Logo y Menú */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <NavLink
          to="/"
          onClick={() => {
            setSearchByCategory('');
            setIsMenuOpen(false);
          }}
          className="font-semibold text-lg hover:text-gray-700"
        >
          Shopi
        </NavLink>

        <div className="flex gap-2 items-center">
          {/* Botón del carrito */}
          <button
            className="flex gap-1 items-center p-2 md:hidden rounded-lg hover:bg-gray-100"
            aria-label="Shopping Cart"
            onClick={() => {
              openCheckoutSideMenu();
              setIsMenuOpen(false);
            }}
          >
            <ShoppingBagIcon className="size-6" />
            <div className="text-sm text-black">{cartProducts.length}</div>
          </button>

          {/* Botón Menú */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="size-7" />
            ) : (
              <Bars3Icon className="size-7" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Desktop */}
      <div className="hidden md:flex flex-1 justify-between items-center">
        <ul className="flex items-center gap-4 ml-4">
          {[
            { to: '/', text: 'All' },
            { to: '/clothing', text: 'Clothes' },
            { to: '/jewelery', text: 'Jewelry' },
            { to: '/electronics', text: 'Electronics' },
          ].map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => {
                  setSearchByCategory('');
                  setIsMenuOpen(false);
                }}
                className={({ isActive }) =>
                  `hover:text-gray-700 ${isActive ? activeStyle : ''}`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Sección derecha Desktop */}
        <ul className="flex items-center gap-4 text-nowrap">
          <li className="text-black/55 truncate max-w-[120px]">
            alirio@platzi.com
          </li>
          {['My Orders', 'My Account', 'Sign In'].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className={({ isActive }) =>
                  `hover:text-gray-700 ${isActive ? activeStyle : ''}`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li className="flex gap-2 items-end">
            <ShoppingBagIcon
              className="text-black/70 size-6 cursor-pointer hover:text-black"
              onClick={() => openCheckoutSideMenu()}
            />
            <div className="text-sm">{cartProducts.length}</div>
          </li>
        </ul>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="w-full md:hidden mt-4">
          <div className="flex flex-col pt-4 space-y-4 border-t text-end">
            {/* Sección de navegación */}
            <ul className="flex flex-col items-end gap-1 w-full">
              {[
                { to: '/', text: 'All' },
                { to: '/clothing', text: 'Clothes' },
                { to: '/jewelery', text: 'Jewelry' },
                { to: '/electronics', text: 'Electronics' },
              ].map((link) => (
                <li key={link.to} className="w-full">
                  <NavLink
                    to={link.to}
                    onClick={() => {
                      setSearchByCategory('');
                      setIsMenuOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block py-2 hover:bg-gray-50 ${
                        isActive ? activeStyle : ''
                      }`
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Sección usuario */}
            <ul className="flex flex-col items-center gap-1 w-full pt-4 border-t">
              <li className="flex gap-3 text-black/55 items-end place-self-end">
                alirio@platzi.com
              </li>
              {/* <li className="flex gap-2 items-end">
                
              </li> */}
              {['My Orders', 'My Account', 'Sign In'].map((item) => (
                <li key={item} className="w-full">
                  <NavLink
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 hover:bg-gray-50"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
