import { MdOutlineCancel } from "react-icons/md";

function JoinMeeting() {
  return (
   
        <div className=" rounded-2xl absolute bg-white left-[25%] w-1/2 h-1/2  top-[25%] flex flex-col justify-center items-center gap-4 p-4">
          <button className=" absolute right-0 top-0" ><MdOutlineCancel className=" w-12 h-12" />
          </button>
      <input
        type="text"
        name="meeting-id"
        id="meeting-id"
        placeholder="Enter meeting Id"
        className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />{" "}
      <button className=" px-4 py-2 rounded-xl bg-blue text-white font-bold w-1/2">Join</button>
    </div>
  
  
  );
}
export default JoinMeeting;
