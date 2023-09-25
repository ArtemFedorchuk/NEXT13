import Link from "next/link";

const Review = () => {
    /// profile/1/review/3
    return (
        <div>
            <h1>Main Review page</h1>
            <Link href={{
                pathname: '/profile/1/review/3',
            }}
                  className="bg-green-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                Review info
            </Link>
        </div>
    );
};

export default Review;
