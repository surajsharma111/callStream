import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  CancelCallButton,
  SpeakingWhileMutedNotification,
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
} from "@stream-io/video-react-sdk";

import { ParticipantView } from "@stream-io/video-react-sdk";
import PropTypes from "prop-types";

// ... rest of the App.tsx code

const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1BhZG1fX0FtaWRhbGEiLCJ1c2VyX2lkIjoiUGFkbV9fQW1pZGFsYSIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzQzMjIzMzUxLCJleHAiOjE3NDM4MjgxNTF9.duxna9f5NvQmQAlirQnFzRFPq1_wMHlS4tD6lHrMHwo";
const userId = "Padm__Amidala";
const callId = "WG91EONMjay7";

const user = {
  id: userId,
  name: "Suraj",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};
const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("default", callId);
call.join({ create: true });

const MyUILayout = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition="bottom" />
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black bg-opacity-80 p-3 rounded-lg w-[90%] max-w-[600px]">
        <ToggleAudioPublishingButton />
        <ToggleVideoPublishingButton />
        <CancelCallButton />
      </div>
      <SpeakingWhileMutedNotification />
      <CallControls />
    </StreamTheme>
  );
};

function HostMeeting() {
  return (
    <>
      <div className=" border flex flex-col h-full border-black w-full">
        <StreamVideo client={client}>
          <StreamCall call={call}>
            <MyUILayout />
          </StreamCall>
        </StreamVideo>
      </div>
    </>
  );
}
export default HostMeeting;

export const MyParticipantList = (props) => {
  const { participants } = props;
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
      {participants.map((participant) => (
        <ParticipantView
          muteAudio
          participant={participant}
          key={participant.sessionId}
        />
      ))}
    </div>
  );
};

MyParticipantList.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.object),
};

export const MyFloatingLocalParticipant = (props) => {
  const { participant } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "15px",
        left: "15px",
        width: "240px",
        height: "135px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 3px",
        borderRadius: "12px",
      }}
    >
      {participant && <ParticipantView muteAudio participant={participant} />}{" "}
    </div>
  );
};
MyFloatingLocalParticipant.propTypes = {
  participant: PropTypes.object,
};
