import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Dashboard() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-6 py-12">
        <h1 className="font-bold text-4xl text-blue-600 max-w-3xl leading-snug">
          We help People to Connect Visually all over the world
        </h1>
      </div>

      {/* Banner Image */}
      <div className="w-full flex justify-center bg-slate-100 py-6">
        <img className="rounded-xl shadow-lg w-[90%] max-w-4xl" src="/banner.webp" alt="CallStream Banner" />
      </div>

      {/* About Section */}
      <div className="w-full flex flex-col items-center px-6 py-12 bg-white">
        <h2 className="italic text-3xl text-gray-700 mb-4">A Little Bit About Us</h2>
        <p className="text-lg text-gray-600 font-medium max-w-4xl leading-relaxed text-center">
          At <span className="font-bold text-blue-600">CallStream</span>, we’re passionate about connecting people 
          through seamless, secure, and high-quality video communication. Our platform was created with the vision to revolutionize 
          how people interact online—whether for work, learning, or personal connections. 
          <br /><br />
          We provide an <span className="font-bold">all-in-one video chat solution</span> that integrates cutting-edge technologies 
          like Multi-Factor Authentication (MFA) and robust cybersecurity measures, ensuring your communications are 
          safe, encrypted, and reliable. Our mission is to make video communication effortless and secure for everyone.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
