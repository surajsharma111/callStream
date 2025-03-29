import { CallingState, StreamCall, StreamVideo, StreamVideoClient, useCall, useCallStateHooks } from '@stream-io/video-react-sdk';



function HostMeeting() {
  
  const apiKey = 'mmhfdzb5evj2';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1BhZG1fX0FtaWRhbGEiLCJ1c2VyX2lkIjoiUGFkbV9fQW1pZGFsYSIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzQzMjIzMzUxLCJleHAiOjE3NDM4MjgxNTF9.duxna9f5NvQmQAlirQnFzRFPq1_wMHlS4tD6lHrMHwo';
  const userId = 'Padm__Amidala';
  const callId = 'WG91EONMjay7';

  // set up the user object
const user = {
  id: userId,
  name: 'Oliver',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};
const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);
call.join({ create: true });
 const MyUILayout = () => {
  const call = useCall();

  const { useCallCallingState, useParticipantCount } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();

  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      `    Call ${call.id} has {participantCount} participants`
    </div>
  );
};
  
  return (
    
    <StreamVideo client={client}>
    <StreamCall call={call}>
      <MyUILayout />
    </StreamCall>
  </StreamVideo>
  )
}
export default HostMeeting;
