
function JoinMeeting  () {
  

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
    <div className="flex flex-col justify-center items-center w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
      
      <h2 className="text-blue-600 font-bold text-2xl text-center">Join a Meeting</h2>

     
   
        <div className="w-full flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Enter Room ID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="w-full px-4 py-3 rounded-xl font-bold  bg-blue-500 hover:bg-blue-700 transition"
          >
            Join
          </button>
        </div>
    
      {/* Video Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <video  autoPlay playsInline muted className="w-40 h-28 border rounded-lg shadow-md" />
        <video  autoPlay playsInline className="w-40 h-28 border rounded-lg shadow-md" />
      </div>
    </div>
  </div>
  )
}

export default JoinMeeting;
