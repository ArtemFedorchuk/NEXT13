import React from 'react';
import Link from "next/link";

const ProfileDetail = ({ params }: { params: { profileId: string } }) => {
    return (
        <div>
            <h1>Profile Details: {params.profileId}</h1>
            <Link href={{
                pathname: '/profile',
            }} className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                Profile
            </Link>
        </div>
    );
};

export default ProfileDetail;
