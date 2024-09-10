import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  // conditional return for when the user is not logged in
  if (!user)
    return (
      <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full relative bottom-40">
          <h2 className="text-3xl font-bold text-center text-white">Please Login</h2>
        </div>
      </div>
    );

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full relative bottom-40">
        <h2 className="text-3xl font-bold text-center text-white">
          Welcome, {user.username}!
        </h2>
      </div>
    </div>
  );
};

export default Profile;
