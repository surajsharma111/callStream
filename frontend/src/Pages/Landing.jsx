import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JoinMeeting from "../Components/JoinMeeting";
import { useState } from "react";
function Landing() {
  const [showJoinMeeting, setShowJoinMeeting] = useState(false);

  const handleJoinMeetingClick = () =>{
    setShowJoinMeeting(true)
  }
  return (

    <>
      <div className="  w-screen ">
        <div className=" h-screen  w-screen ">
          <Header onJoinMeetingClick={handleJoinMeetingClick} />
          {showJoinMeeting &&(
             <JoinMeeting/>
          )}
         
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
            
            <p  className="w-[95%] m-auto italic mt-6 mb-6">
              Welcome to Truelocalbiz, your trusted platform for comparing the
              best deals on SIM cards, insurance, energy plans, and much more.
              We are dedicated to helping individuals and businesses make
              informed decisions by providing transparent, up-to-date
              comparisons across a wide range of services. At Truelocalbiz, we
              believe that finding the right plan shouldn’t be a hassle. Our
              mission is to simplify the decision-making process by offering an
              easy-to-use interface, tailored recommendations, and unbiased
              insights. Whether you’re looking for a cost-effective energy plan,
              reliable insurance coverage, or the best mobile SIM deal, we’ve
              got you covered. We pride ourselves on being a one-stop solution
              for all your service needs. By partnering with trusted providers,
              we ensure that you have access to only the best options in the
              market. With Truelocalbiz, you can compare, choose, and save—all
              in one place. Join the thousands who trust us to make smarter
              choices. Discover why Truelocalbiz is the go-to comparison website
              for savvy consumers and businesses alike. Your search for the
              perfect deal starts here.
            </p>
          </div>

          <div className=" w-[95%] m-auto  ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
export default Landing;
