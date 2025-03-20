import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from "react";
import SignUp from "./Signup.jsx";
function Landing() {

  
  return (
    <>
      <div className="  w-screen ">
        <div className=" h-screen  w-screen ">
          <Header  />
          <SignUp/>

          <div className="  my-8 ml-6">
            <h1 className=" font-bold text-4xl">
              We help People to Connect Visually all over the world
            </h1>
          </div>
          <div className=" w-full flex justify-center bg-slate-50">
            <img className=" rounded-xl " src="/banner.webp" alt="" />
          </div>
          <div>
            <div className="  my-8 ml-6">
              <h1 className=" italic text-4xl">A little Bit about us</h1>
            </div>
        <div className=" w-full flex justify-center ">
        <p className=" font-bold flex w-[95%] my-4 ">
              At CallStream, we’re passionate about connecting people through
              seamless, secure, and high-quality video communication. Our
              platform was created with the vision to revolutionize how people
              interact online—whether for work, learning, or personal
              connections. We provide an all-in-one video chat solution that
              integrates cutting-edge technologies like Multi-Factor
              Authentication (MFA) and robust cybersecurity measures, ensuring
              your communications are safe, encrypted, and reliable. Our team is
              dedicated to building an intuitive, easy-to-use platform that
              empowers individuals and organizations to communicate effortlessly
              in a world that’s becoming more connected every day. At
              CallStream, we are committed to continuous innovation and
              delivering the best possible experience to our users, whether
              you're hosting a meeting, conducting an interview, or simply
              catching up with friends. Join us and experience video
              communication without limits.
            </p>
        </div>
          
          </div>

          <div className="  m-auto  ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
