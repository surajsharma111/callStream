import "@stream-io/video-react-sdk/dist/css/styles.css";
import {
  CallControls,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  SpeakerLayout,
} from "@stream-io/video-react-sdk";

const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0NhZF9CYW5lIiwidXNlcl9pZCI6IkNhZF9CYW5lIiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6NjA0ODAwLCJpYXQiOjE3NDMzODA4MTQsImV4cCI6MTc0Mzk4NTYxNH0.Dubm9GnOCHiCMibma3xat8x9GFUzWgAPR3Lq1C9z8KE";
const userId = "Cad_Bane";
const callId = "dN7H0l1i7CnA";

function JoinMeeting() {
  const user = {
    id: userId,
    name: "Oliver",
    image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
  };

  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call("default", callId);
  call.join({ create: true });
  // Assuming you have the 'client' and 'call' instance created
  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <SpeakerLayout />
          <CallControls />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
}
export default JoinMeeting;
