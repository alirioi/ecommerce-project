import Layout from '../../Components/Layout';

function SignIn() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mt-5 text-green-950">Welcome</h1>
      <div className="flex flex-col gap-4 items-center justify-center mt-10 w-80">
        <input
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
        />
        <button className="bg-green-950 text-white rounded-lg px-4 py-2 w-full font-semibold">
          Log In
        </button>
        <span className="text-sm text-green-800 underline mb-6 cursor-pointer hover:text-green-950">
          Forgot my password
        </span>
        <button className="bg-green-400 text-green-950 rounded-lg px-4 py-2 w-full font-semibold">
          Sign Up
        </button>
      </div>
    </Layout>
  );
}

export default SignIn;
