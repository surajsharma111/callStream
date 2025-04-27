import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,

} from '@stream-io/video-react-sdk';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import '..//../src/index.css';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0x1bWl5YSIsInVzZXJfaWQiOiJMdW1peWEiLCJ2YWxpZGl0eV9pbl9zZWNvbmRzIjo2MDQ4MDAsImlhdCI6MTc0NTcyNDU3MiwiZXhwIjoxNzQ2MzI5MzcyfQ.4JVaGCrWGxwEZ-f-6_bRY7sgon1Zrsd7u5th6SgQwQc';
const userId = 'Lumiya';
const callId = 'dOXw2WGEY3tz';

const user = {
  id: userId,
  name: 'Suraj',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);
call.join({ create: true });

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
export const MyUILayout = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition='bottom' />
      <CallControls />
    </StreamTheme>
  );
};