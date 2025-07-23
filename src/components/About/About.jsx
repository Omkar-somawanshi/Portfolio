import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/tech_logo/omii.png';

const About = () => {
  const [downloadClicked, setDownloadClicked] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    // Use current time in Nashik, Maharashtra, India
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
    const hourInIndia = indiaTime.getHours();

    if (hourInIndia < 12) return 'Good Morning,';
    if (hourInIndia < 18) return 'Good Afternoon,';
    return 'Good Evening,';
  };

  const handleDownloadClick = () => {
    setDownloadClicked(true);
    setTimeout(() => {
      setDownloadClicked(false);
    }, 2000);
  };

  return (
    <section
      id="about"
      className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans  relative text-white overflow-hidden border-t-2 border-b-2 border-purple-800/60 backdrop-blur-sm"
      style={{
        background: 'rgba(15, 5, 36, 0.3)' // Semi-transparent dark purple
      }}
    >
      {/* Animated Grid Background - Made transparent */}
      <div 
        className="absolute inset-0  opacity-100 pointer-events-none "
        style={{
          backgroundImage: `
            linear-gradient(rgba(130, 69, 236, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(130, 69, 236, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Animated Corner Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-600 animate-draw-lines-top-left after-draw-pulse"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-600 animate-draw-lines-top-right after-draw-pulse"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-600 animate-draw-lines-bottom-left after-draw-pulse"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-600 animate-draw-lines-bottom-right after-draw-pulse"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center z-10 relative space-y-16 md:space-y-0 md:space-x-20">
        {/* Left Side: Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight animate-slide-in-left">
            {getGreeting()}
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-500 mb-6 leading-tight animate-slide-in-left-delay-1">
            Omkar Somawanshi
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-300 leading-tight animate-slide-in-left-delay-2 typing-effect-underline-reveal group">
            <span className="text-gray-400">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'MERN Stack Developer ',
                'Coder',
              ]}
              speed={60}
              eraseSpeed={25}
              typingDelay={300}
              eraseDelay={1500}
              cursorRenderer={(cursor) => (
                <span className="text-purple-500 font-bold animate-pulse-cursor">{cursor}</span>
              )}
              className="inline-block"
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-16 mt-12 leading-relaxed animate-slide-in-left-delay-3">
            I am a Motivated and dedicated full stack developer with strong hands-on experience in the MERN stack (MongoDB, Express, React, Node.js). Passionate about building scalable web applications, continuously learning new technologies, and solving real-world problems through clean and efficient code.
          </p>
          {/* Resume Button */}
          <button
            onClick={handleDownloadClick}
            className="group relative inline-flex items-center justify-center py-4 px-12 rounded-lg text-lg font-bold overflow-hidden transition-all duration-200 ease-in-out bg-purple-600 hover:bg-purple-700 transform hover:-translate-y-1 hover:scale-[1.02] button-fill-effect animate-slide-in-left-delay-4"
            aria-label="Download Omkar Somawanshi's CV"
          >
            <span className="relative z-10 text-white flex items-center">
              {downloadClicked ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                'DOWNLOAD CV'
              )}
            </span>
          </button>
        </div>

        {/* Right Side: Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end animate-slide-in-right">
          <Tilt
            className="w-60 h-60 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-xl overflow-hidden border-2 border-purple-700 relative image-scanline-effect image-border-flicker"
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={600}
            scale={1.01}
            transitionSpeed={400}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Omkar Somawanshi"
              className="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent animate-pulse-overlay pointer-events-none"></div>
            <div className="absolute inset-0 rounded-xl overflow-hidden image-inner-pulse-overlay pointer-events-none"></div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;