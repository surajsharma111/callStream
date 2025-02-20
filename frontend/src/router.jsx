import { createBrowserRouter } from "react-router-dom";
import Landing from "./Pages/Landing";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    }
    
  ]);
  export default router