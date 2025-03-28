
import { FaVideo } from "react-icons/fa6";


function HostMeeting() {
  

  return (
    
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
          <div className="flex flex-col justify-center items-center w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
            
            {/* Logo & Title */}
            <h1 className="flex flex-row items-center justify-center gap-2 font-bold text-blue-600 text-2xl">
              CallStream <FaVideo />
            </h1>
            
            <h2 className="w-full text-center font-bold text-blue-600 text-xl mt-4">
              Host a Meeting
            </h2>
    
            {/* Create Room Button */}
            
              <button
                className="w-full px-4 py-3 mt-4 rounded-xl font-bold  bg-blue-500 hover:bg-blue-700 transition"
                
              >
                Create Room
              </button>
             
              <p className="text-gray-700 font-semibold mt-4">
                Room ID: <span className="text-blue-500 font-bold"></span> (Share this ID with participants)
              </p>
            
    
            {/* Video Section */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <video  autoPlay playsInline muted className="w-40 h-28 border rounded-lg shadow-md" />
              <video  autoPlay playsInline className="w-40 h-28 border rounded-lg shadow-md" />
            </div>
          </div>
        </div>
  )
}
export default HostMeeting;
