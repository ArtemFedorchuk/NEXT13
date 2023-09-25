import React from 'react';

import Link from 'next/link';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Link
        href={{
          pathname: '/profile/settings',
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Settings
      </Link>
    </div>
  );
};

export default Profile;
