import { createBrowserRouter } from "react-router-dom";
import Landing from "./Pages/Landing";
import SignUp from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
import JoinMeeting from "./Components/JoinMeeting";
import Dashboard from "./Pages/Dashboard";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import HostMeeting from "./Components/HostMeeting";




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
    },
    {
      path: '/host-meeting',
      element: <HostMeeting/>
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword/>
    },
    {
      path: '/reset-password',
      element: <ResetPassword/>
    }
    
  ]);
  export default router