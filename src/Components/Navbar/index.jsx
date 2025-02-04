import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
  const { cartProducts, openCheckoutSideMenu, setSearchByCategory } =
    useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-md font-light bg-white shadow-md">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/" onClick={() => setSearchByCategory('')}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => setSearchByCategory('')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelry
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3 text-nowrap">
        <li className="text-black/55">alirio@platzi.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex gap-1 items-center">
          <ShoppingBagIcon
            className="text-black/70 size-6 cursor-pointer hover:text-black"
            onClick={() => openCheckoutSideMenu()}
          />
          <div>{cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
