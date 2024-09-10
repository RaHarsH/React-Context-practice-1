import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
    <h1 className='bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center text-gray-400 text-xl font-bold'>React Context API practice-1</h1>
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 text-white bg-white/10 backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 placeholder-gray-300"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 text-white bg-white/10 backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 placeholder-gray-300"
        />
        <button
          onClick={handleSubmit}
          className="w-full py-3 text-lg text-white bg-blue-800 backdrop-blur-lg rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
    </>
  );
};

export default Login;
