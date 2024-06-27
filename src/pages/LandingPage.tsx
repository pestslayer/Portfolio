const LandingPage = () => {
  return (
    <div className="bg-background md:mt-24 text-white text-xs min-h-screen flex flex-col">
      <div className="flex items-center mt-20 mx-auto md:ml-[17%]">
        <img src="/arrow.svg" alt="Arrow" />
        <p className="mb-12" id="home">Hello! I am Dennis McMorris</p>
      </div>
      <div className="flex justify-start ml-[10%] md:ml-[10%]">
        <img
          src="logo.svg"
          alt="Avatar"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
        />
      </div>
      <div className="text-center md:text-left md:ml-[10%] p-5">
        <h1 className="text-3xl md:text-5xl">I'm a Software Engineer</h1>
        <p className="text-sm mt-2">fullstack with knowladge in React, Flask, Python, Javascript and much more to</p>
        <p className="text-sm mt-2">get a full list visit my Linkedin</p>
        <p className="text-sm mt-20">From Coding Temple to Co Lab, and now in my third year of Computer</p>
        <p className="text-sm mt-2">Science at the University of Phoenix, my journey in technology has been</p>
        <p className="text-sm mt-2">diverse and enriching.</p>
        <h1 className="text-2xl md:text-4xl mt-20 md:mt-40" id="about">Experience</h1>
      </div>

      <div className="flex flex-wrap justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center text-white border-t-2 border-purple-500 rounded-xl w-[90%] md:w-[45%] xl:w-[30%] bg-gradient-to-r from-boxOne to-purple-900 p-4 relative">
          <img
            src="boxonebase.svg"
            alt="Base"
            className="relative w-24 h-24 mt-10"
          />
          <img
            src="boxoneimg.svg"
            alt="Ribbon"
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
          />
          <div className="flex flex-col items-center z-10">
            <h1 className="text-2xl md:text-3xl mt-10">Coding Temple</h1>
            <p className="text-center mt-2">From HTML to Flask and React, my coding skills have been honed through the rigorous training at Coding Temple</p>
            <button className="mt-4 bg-button py-2 px-4 border border-purple-500">Learn More</button>
          </div>
        </div>

        <div className="flex flex-col items-center text-white border-t-2 border-purple-500 rounded-xl w-[90%] md:w-[45%] xl:w-[30%] bg-gradient-to-r from-purple-900 to-customColor p-4 relative">
          <img
            src="boxonebase.svg"
            alt="Base"
            className="relative w-24 h-24 mt-10"
          />
          <img
            src="bulb.svg"
            alt="Ribbon"
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
          />
          <div className="flex flex-col items-center z-10 mt-10">
            <h1 className="text-2xl md:text-3xl mt-10">Co Labs</h1>
            <p className="text-center mt-2">Learning to build applications on a full team in a real world setting</p>
            <button className="mt-4 bg-button py-2 px-4 border border-purple-500">Learn More</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center text-white border-t-2 border-purple-500 rounded-xl w-[90%] md:w-[45%] xl:w-[30%] bg-gradient-to-r from-boxOne to-purple-900 p-4 relative">
          <img
            src="boxonebase.svg"
            alt="Base"
            className="relative w-24 h-24 mt-10"
          />
          <img
            src="mug.svg"
            alt="Ribbon"
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
          />
          <div className="flex flex-col items-center z-10 mt-10">
            <h1 className="text-2xl md:text-3xl mt-10">University of Phoenix</h1>
            <p className="text-center mt-2">Learning computer science has been a transformative journey, constantly challenging me to think critically and solve complex problems</p>
            <button className="mt-4 bg-button py-2 px-4 border border-purple-500">Learn More</button>
          </div>
        </div>

        <div className="flex flex-col items-center text-white border-t-2 border-purple-500 rounded-xl w-[90%] md:w-[45%] xl:w-[30%] bg-gradient-to-r from-purple-900 to-customColor p-4 relative">
          <img
            src="boxonebase.svg"
            alt="Base"
            className="relative w-24 h-24 mt-10"
          />
          <img
            src="dropper.svg"
            alt="Ribbon"
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
          />
          <div className="flex flex-col items-center z-10 mt-10">
            <h1 className="text-2xl md:text-3xl mt-10">Personal Projects</h1>
            <p className="text-center mt-2">To keep up with coding and practice my learnings. All my projects can be found on my github</p>
            <button className="mt-4 bg-button py-2 px-4 border border-purple-500">Learn More</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 md:mt-20 relative">
        <img src="mid.svg" alt="cross functional" className=" xl:w-[60%] xl:h-[50%]" />
      </div>
      <div>
        <img src="featured.svg" alt="feautred" id="lab" />
      </div>
      <div className="text-white ml-[8%]">
        <h1 className="text-2xl">Contact</h1>
        <p className="mt-2 text-lg">Want to know more?</p>
        <p className="mt-2 text-lg">Lets connect</p>
        <p className="mt-2">ryamcmorris@gmail.com</p>
        <a href="https://www.linkedin.com/in/ryan-mcmorris-720970184/" >
        <i className="fa-brands fa-linkedin fa-2x h-10 mt-5"></i>
        </a>
        <a href="https://github.com/pestslayer" className="m-2">
        <i className="fa-brands fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
