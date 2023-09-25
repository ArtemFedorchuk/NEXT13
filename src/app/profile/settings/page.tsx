import React from 'react';
import Link from 'next/link';

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <Link
        href={{ pathname: 'profile' }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Profile
      </Link>
    </div>
  );
};

export default Settings;
