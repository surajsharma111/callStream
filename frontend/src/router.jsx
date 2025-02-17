import { createBrowserRouter } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <SignupPage />
    }
    
  ]);
  export default router