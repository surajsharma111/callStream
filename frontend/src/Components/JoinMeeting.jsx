import { MdOutlineCancel } from "react-icons/md";
import meeting from "../action/meeting";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to signaling server

function JoinMeeting() {
    const [roomId, setRoomId] = useState("");
  const [joined, setJoined] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  
  const config = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  };

  useEffect(() => {
    socket.on("offer", async (offer) => {
      console.log("Received offer", offer);
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit("answer", { roomId, answer });
    });

    socket.on("answer", async (answer) => {
      console.log("Received answer", answer);
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on("ice-candidate", async (candidate) => {
      console.log("Received ICE candidate", candidate);
      await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
    });
  }, [roomId]);

  const startCall = async () => {
    peerConnection.current = new RTCPeerConnection(config);
    
    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", { roomId, candidate: event.candidate });
      }
    };

    peerConnection.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = stream;
    
    stream.getTracks().forEach((track) => {
      peerConnection.current.addTrack(track, stream);
    });

    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);
    socket.emit("offer", { roomId, offer });

    setJoined(true);
  };

  const joinRoom = () => {
    socket.emit("join-room", roomId);
    startCall();
  };

    


    return (
       
        <div className="  rounded-2xl absolute bg-white left-[25%] w-1/2 h-1/2 top-[25%] flex flex-col justify-center items-center gap-4 p-4">
            <button className="absolute right-0 top-0">
                <MdOutlineCancel className="w-12 h-12" />
            </button>
            <form className=" w-full justify-center items-center gap-8  flex flex-col" onSubmit={}>
            {!joined && (
            <>
              <input
                type="text"
                placeholder="Enter Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
             
            </>
          )}
                <input
                    onClick={joinRoom}
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
