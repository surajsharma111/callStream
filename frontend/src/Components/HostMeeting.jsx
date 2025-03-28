import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { API_ENDPOINT } from "../constant";
import { FaVideo } from "react-icons/fa6";

const socket = io(API_ENDPOINT);

function HostMeeting() {
  const [roomId, setRoomId] = useState("");
  const [started, setStarted] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);

  useEffect(() => {
    socket.on("user-joined", (userId) => {
      console.log(`User ${userId} joined`);
      createOffer();
    });

    socket.on("answer", (data) => {
      console.log("Received answer");
      peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(data.answer)
      );
    });
    socket.on("ice-candidate", (data) => {
      console.log("Received ICE candidate");
      peerConnection.current.addIceCandidate(
        new RTCIceCandidate(data.candidate)
      );
    });
  }, []);
  const createRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 10);
    setRoomId(newRoomId);
    socket.emit("create-room", newRoomId);
    startVideo();
  };
  const startVideo = async () => {
    peerConnection.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", { candidate: event.candidate, roomId });
      }
    };

    peerConnection.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    localVideoRef.current.srcObject = stream;
    stream
      .getTracks()
      .forEach((track) => peerConnection.current.addTrack(track, stream));

    setStarted(true);
  };
  const createOffer = async () => {
    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);
    socket.emit("offer", { offer, roomId });
  };

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
            {!started ? (
              <button
                className="w-full px-4 py-3 mt-4 rounded-xl font-bold  bg-blue-500 hover:bg-blue-700 transition"
                onClick={createRoom}
              >
                Create Room
              </button>
            ) : (
              <p className="text-gray-700 font-semibold mt-4">
                Room ID: <span className="text-blue-500 font-bold">{roomId}</span> (Share this ID with participants)
              </p>
            )}
    
            {/* Video Section */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <video ref={localVideoRef} autoPlay playsInline muted className="w-40 h-28 border rounded-lg shadow-md" />
              <video ref={remoteVideoRef} autoPlay playsInline className="w-40 h-28 border rounded-lg shadow-md" />
            </div>
          </div>
        </div>
  )
}
export default HostMeeting;
