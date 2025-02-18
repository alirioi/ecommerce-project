import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import { Storage } from '../../Utils';

function SignIn() {
  const { account } = useContext(ShoppingCartContext);

  // Account
  const accountEmail = Storage.getItem('account');
  const parsedAccount = JSON.parse(accountEmail);

  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = account
    ? Object.keys(account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  return (
    <Layout>
      <h1 className="text-2xl font-bold mt-5 text-green-950">Welcome</h1>
      <div className="flex flex-col gap-4 items-center justify-center mt-10 w-80">
        {/* <input
          type="text"
          name="email"
          placeholder="Email"
          className="border border-green-950 rounded-lg w-full py-2 px-4 text-sm outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-green-950 rounded-lg w-full py-2 px-4 text-sm outline-none"
          required
        /> */}
        <p className="place-self-start">
          <span className="text-sm text-green-950 font-semibold">Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p className="place-self-start mb-6">
          <span className="text-sm text-green-950 font-semibold">
            Password:{' '}
          </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to="/">
          <button
            className="bg-green-950 text-white rounded-lg px-4 py-2 w-full font-semibold"
            disabled={!hasUserAnAccount}
          >
            Log In
          </button>
        </Link>
        <span className="text-sm text-green-800 underline underline-offset-4 mb-6 cursor-pointer hover:text-green-950">
          Forgot my password
        </span>
        <button
          className="bg-green-400 text-green-950 rounded-lg px-4 py-2 w-full font-semibold"
          disabled={!hasUserAnAccount}
        >
          Sign Up
        </button>
      </div>
    </Layout>
  );
}

export default SignIn;
