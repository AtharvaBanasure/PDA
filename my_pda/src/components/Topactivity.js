import React from "react";
import Logo from "../assets/img/PDA_Logo_trsp.png";
import PDA_quiz from '../assets/img/PDA_quiz.png';
import PDA_coding from '../assets/img/PDA_coding.jpg';
import PDA_resume from '../assets/img/PDA_resume.jpeg';
function Topactivity() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-[#426B1F] hover:bg-[#486a2a]"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-/5 text-gray-900 font-medium title-font text-4xl mb-2 sm:mb-0">Top Activities</h1>
            {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p> */}
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src={PDA_quiz}/>
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">PDA Aptitute</h2>
            <p className="text-base leading-relaxed mt-2">TE IT Students: PDA Skills Test on Jan 27, 10 AM - 1 PM. MCQs on OS, Aptitude, English. Win awards!</p>
            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src={PDA_coding}/>
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">PDA Coding Contest</h2>
            <p className="text-base leading-relaxed mt-2">PDA Coding Contest on Feb 1, 6-8 PM! Showcase coding skills, win prizes!</p>
            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src={PDA_resume}/>
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Career Guidance & Resume Building</h2>
            <p className="text-base leading-relaxed mt-2">PDA Career Path Session at IT Seminar Hall. Learn from PhonePe Engineers!</p>
            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topactivity;
