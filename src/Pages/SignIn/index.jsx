import { useContext, useState, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import { Storage } from '../../Utils/Storage';

function SignIn() {
  const { setSignOut, setAccount, hasAnAccount } =
    useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info');
  const form = useRef(null);

  // Account
  const { accountParsed } = hasAnAccount();

  // Has an account

  const { hasUserAnAccount } = hasAnAccount();

  const handleSignIn = () => {
    Storage.setItem('sign-out', false);
    setSignOut(false);

    // Redirect to home page
    return <Navigate replace to={'/'} />;
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // Create Account
    Storage.setItem('account', data);
    setAccount(data);

    // Sign In
    handleSignIn();
  };

  const renderLogIn = () => {
    return (
      <div className="flex flex-col gap-4 mt-10 w-80">
        <p className="w-full flex gap-2 items-center justify-between">
          <span className="text-sm text-green-950 font-semibold">Email: </span>
          <span className="block text-sm text-green-950 bg-green-200 px-4 py-2 rounded-lg w-3/4 h-[36px] truncate">
            {accountParsed?.email}
          </span>
        </p>
        <p className="w-full flex gap-2 items-center mb-6 justify-between">
          <span className="text-sm text-green-950 font-semibold">
            Password:
          </span>
          <span className="block text-sm text-green-950 bg-green-200 px-4 py-2 rounded-lg w-3/4 h-[36px] truncate">
            {accountParsed?.password}
          </span>
        </p>
        <Link to="/">
          <button
            className="bg-green-950 text-white rounded-lg px-4 py-2 w-full font-semibold disabled:bg-black/40"
            onClick={() => handleSignIn()}
            disabled={!hasUserAnAccount}
          >
            Log In
          </button>
        </Link>
        <span className="text-sm text-center text-green-700 underline underline-offset-4 mb-6 cursor-pointer hover:text-green-950">
          Forgot my password
        </span>
        <button
          className="bg-green-400 text-green-950 rounded-lg px-4 py-2 w-full font-semibold disabled:bg-black/40 disabled:text-white"
          disabled={hasUserAnAccount}
          onClick={() => setView('create-user-info')}
        >
          Sign Up
        </button>
      </div>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 mt-10 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-green-950">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={accountParsed?.name}
            placeholder="Peter"
            className="border border-green-950 rounded-lg w-full py-2 px-4 text-sm outline-none placeholder:font-light"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-green-950">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={accountParsed?.email}
            placeholder="hi@example.com"
            className="border border-green-950 rounded-lg w-full py-2 px-4 text-sm outline-none placeholder:font-light"
            required
          />
        </div>
        <div className="flex flex-col gap-1 mb-10">
          <label htmlFor="password" className="text-sm text-green-950">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={accountParsed?.password}
            placeholder="********"
            className="border border-green-950 rounded-lg w-full py-2 px-4 text-sm outline-none"
            required
          />
        </div>
        <Link to="/">
          <button
            className="bg-green-400 text-green-950 rounded-lg px-4 py-2 w-full font-semibold disabled:bg-black/40 disabled:text-white"
            onClick={() => createAnAccount()}
          >
            Create
          </button>
        </Link>
      </form>
    );
  };

  const renderView = () =>
    view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mt-5 mb-6 text-green-950">Welcome</h1>
      {renderView()}
    </Layout>
  );
}

export default SignIn;
