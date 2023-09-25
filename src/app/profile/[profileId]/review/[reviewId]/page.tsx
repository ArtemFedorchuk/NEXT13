import { FC } from 'react';
import Link from 'next/link';

interface ReviewDetailsProps {
  params: { profileId: string; reviewId: number };
}

const ReviewDetails: FC<ReviewDetailsProps> = ({ params }) => {
  const { profileId, reviewId } = params;

  return (
    <div>
      <h1>Profile ID: {profileId}</h1>
      <h1>Review ID: {reviewId}</h1>
      <Link
        href={{ pathname: '/profile' }}
        className="bg-green-600 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
      >
        Profile
      </Link>
    </div>
  );
};

export default ReviewDetails;
