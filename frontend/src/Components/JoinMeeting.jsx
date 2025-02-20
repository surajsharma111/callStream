function JoinMeeting() {
  return (
    <div className=" w-1/2 border border-black flex flex-col justify-center items-center gap-4 p-4">
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
