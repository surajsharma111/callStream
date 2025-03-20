import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export default function Header({ onJoinMeetingClick }) {
  return (
    <div>
      <div className="  w-screen flex flex-row justify-between items-center p-4">
        <h1 className="  flex flex-row items-center justify-center gap-2 font-bold text-blue text-2xl">CallStream <FaVideo />
        </h1>
        <div className=" px-4">
        </div>
      

        <div className="  flex flex-row gap-12 justify-between px-4 items-center mr-4 ">

          <button onClick={onJoinMeetingClick} className=" px-4  py-2 rounded-xl flex items-center justify-center font-bold text-white bg-blue">Join a meeting</button>
          <button  className=" px-4  py-2 rounded-xl flex items-center justify-center font-bold text-white bg-blue">Host a meeting</button>
          <button className=" px-4  py-2 rounded-xl flex items-center justify-center font-bold text-white bg-blue">Sign-in</button>
          <button className=" px-4 py-2 rounded-xl flex items-center justify-center font-bold text-white bg-blue">Sign-up</button>
        </div>
      </div>
    </div>
  );
}
 