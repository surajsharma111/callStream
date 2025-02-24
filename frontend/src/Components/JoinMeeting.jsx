import { MdOutlineCancel } from "react-icons/md";
import meeting from "../action/meeting";
import { useState } from "react";

function JoinMeeting() {
    const [meetingId, setMeetingId] = useState(""); // To store the input value

    // Handle input changes
    const handleChange = (e) => {
        setMeetingId(e.target.value); // Update state with the input value
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const data = { meetingId }; // Create an object with the input data

        const response = await meeting(data); // Send data to backend via `meeting`
        const responseData = await response.json(); // Parse the response from backend
        console.log(responseData); // Log the response
    };

    return (
        <div className="  rounded-2xl absolute bg-white left-[25%] w-1/2 h-1/2 top-[25%] flex flex-col justify-center items-center gap-4 p-4">
            <button className="absolute right-0 top-0">
                <MdOutlineCancel className="w-12 h-12" />
            </button>
            <form className=" w-full justify-center items-center gap-8  flex flex-col" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="meeting-id"
                    id="meeting-id"
                    value={meetingId} // Bind value to state
                    onChange={handleChange} // Update state on change
                    placeholder="Enter meeting Id"
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="submit"
                    name="Join"
                    value="Join"
                    className="px-4 py-2 rounded-xl bg-blue text-white font-bold w-1/2"
                />
            </form>
        </div>
    );
}

export default JoinMeeting;
