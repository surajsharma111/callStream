import  { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const JoinMeeting = () => {
  const [roomId, setRoomId] = useState("");
  const [joined, setJoined] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);

  useEffect(() => {
    socket.on("offer", async (data) => {
      console.log("Received offer");
      peerConnection.current.setRemoteDescription(new RTCSessionDescription(data.offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit("answer", { answer, roomId });
    });

    socket.on("ice-candidate", (data) => {
      console.log("Received ICE candidate");
      peerConnection.current.addIceCandidate(new RTCIceCandidate(data.candidate));
    });
  }, []);

  const joinRoom = async () => {
    if (!roomId) return;
    socket.emit("join-room", roomId);
    startVideo();
    setJoined(true);
  };

  const startVideo = async () => {
    peerConnection.current = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", { candidate: event.candidate, roomId });
      }
    };

    peerConnection.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = stream;
    stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
    <div className="flex flex-col justify-center items-center w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
      
      {/* Title */}
      <h2 className="text-blue-600 font-bold text-2xl text-center">Join a Meeting</h2>

      {/* Input & Join Button */}
      {!joined ? (
        <div className="w-full flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => joinRoom(roomId)}
            className="w-full px-4 py-3 rounded-xl font-bold  bg-blue-500 hover:bg-blue-700 transition"
          >
            Join
          </button>
        </div>
      ) : (
        <p className="text-gray-700 font-semibold mt-4">
          Joined Room: <span className="text-blue-500 font-bold">{roomId}</span>
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
};

export default JoinMeeting;
