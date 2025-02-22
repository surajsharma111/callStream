import { MdOutlineCancel } from "react-icons/md";
import meeting from "../action/meeting";
import { useState } from "react";

function JoinMeeting() {
  const [meetingId, setMeetingId] = useState("");

const handleSubmit = async(e) =>{
  e.preventDefault();
  if(!meetingId){
    alert('Please Enter a meeting id')
  }
  try{
    const response = await meeting({meetingId})
    if(!response.ok){
      throw new Error('Failed to  join meeting')
      
      
    }
    const data = await response.json();
    console.log(data)
  }
  catch(error){
    console.error("Error joining meeting:", error);
  }
}

  return (
   
        <div className=" rounded-2xl absolute bg-white left-[25%] w-1/2 h-1/2  top-[25%] flex flex-col justify-center items-center gap-4 p-4">
          <button className=" absolute right-0 top-0" ><MdOutlineCancel className=" w-12 h-12" />
          </button>
          <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="meeting-id"
        id="meeting-id"
        value={meetingId}
        onChange={ (e) => setMeetingId(e.target.value)}
        placeholder="Enter meeting Id"
        className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />{" "}
      <input type="submit" name="Join" value='Join' className=" px-4 py-2 rounded-xl bg-blue text-white font-bold w-1/2" />
      
      </form>
    </div>
   
  
  );
}
export default JoinMeeting;
