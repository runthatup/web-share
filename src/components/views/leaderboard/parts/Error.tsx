
export type ErrorType = "params" | "data" | "no-data";

export const LeaderboardError: React.FC<{ type: ErrorType }> = ({ type }) => {
  if (type === "params") return <ErrorQueryParams />;
  if (type === "data") return <ErrorData />;
  if (type === "no-data") return <ErrorNoData />;
};

const ErrorQueryParams = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <svg className="w-16 h-16 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Missing Information</h2>
        <p className="text-gray-300 mb-6">
          We couldn't load the leaderboard.
        </p>
        <div className="flex flex-col space-y-4">
          <a href="/" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full py-3 px-4 transition duration-200">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

const ErrorNoData = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-white">Failed to load leaderboard data.</div>
    </div>
  );
};

const ErrorData = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <svg className="w-16 h-16 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Something Went Wrong</h2>
          <p className="text-gray-300 mb-6">
            {"We couldn't load the leaderboard data. Please try again later."}
          </p>
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => window.location.reload()}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full py-3 px-4 transition duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </button>
            <a href="/" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-full py-3 px-4 transition duration-200">
              Go to Home
            </a>
          </div>
        </div>
      </div>
  );
};