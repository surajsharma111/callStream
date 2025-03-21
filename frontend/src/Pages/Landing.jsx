import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";

function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="flex flex-row items-center justify-center gap-2 font-bold text-blue text-2xl">
        CallStream <FaVideo />
      </h1>
      <div className="flex flex-col gap-4 w-60">
        <Link to="/join-meeting">
          <button className="px-4 py-2 w-full rounded-xl flex items-center justify-center font-bold text-white bg-blue">
            Join a meeting
          </button>
        </Link>
        <Link to="/sign-in">
          <button className="px-4 py-2 w-full rounded-xl flex items-center justify-center font-bold text-white bg-blue">
            Sign-in
          </button>
        </Link>
        <Link to="/sign-up">
          <button className="px-4 py-2 w-full rounded-xl flex items-center justify-center font-bold text-white bg-blue">
            Sign-up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
