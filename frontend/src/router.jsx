import { createBrowserRouter } from "react-router-dom";
import Landing from "./Pages/Landing";
import SignUp from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
import JoinMeeting from "./Components/JoinMeeting";
import Dashboard from "./Pages/Dashboard";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: '/dashboard',
      element: <Dashboard/>
    },
    {
      path:"/sign-up",
      element: <SignUp/>
    },
    {
      path: '/sign-in',
      element: <SignIn/>
    },
    {
      path: '/join-meeting',
      element: <JoinMeeting/>
    }
    
  ]);
  export default router