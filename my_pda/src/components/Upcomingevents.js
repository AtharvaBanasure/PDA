import React from "react";

function Upcomingevents() {
  return (
    
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-[#426B1F] hover:bg-[#486a2a]"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-/5 text-gray-900 font-medium title-font text-4xl mb-2 sm:mb-0">Upcoming Sessions</h1>
            {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p> */}
          </div>
            <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">PDA Coding</span>
                <span class="mt-1 text-gray-500 text-sm">01 Feb 2024</span>
                </div>
                <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Professional Development Association (PDA) – the PDA Coding Contest!</h2>
                <p class="leading-relaxed">Get ready for an exhilarating challenge as the Professional Development Association (PDA) presents the PDA Coding Contest! Scheduled for 1st February 2024 from 6:00 PM to 8:00 PM, this competition is open to SE and TE IT students of PICT. Dive into the world of competitive programming and DSA problems on the HackerRank platform for a chance to showcase your coding skills and win certificates and rewards.<br/>

After the contest, join us at 9:00 PM via Google Meet for a post-contest discussion. This interactive session provides a platform to discuss approaches, share insights, and delve into the problem-solving strategies employed by your fellow participants.
<br></br>
To participate, create a HackerRank account, join the contest using the provided link, and be part of the post-contest discussion. The contest link and Google Meet session link will be shared accordingly.

Don't miss out on this opportunity to sharpen your coding prowess and engage in a collaborative learning experience. </p>
                <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">Resume Building</span>
                <span class="mt-1 text-gray-500 text-sm">02 Feb 2024</span>
                </div>
                <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">How to Build Your Career Path & How to Write an Impressive Resume</h2>
                <p class="leading-relaxed">Join us this Friday, 02/02/2024, for an enlightening session on "How to Build Your Career Path and How to Write an Impressive Resume," hosted by the Professional Development Association (PDA). Our esteemed speakers, Sudarshan Gawale and Lokesh Ghule, alumni of IT and Software Engineers at PhonePe (2023 batch pass out), will share invaluable insights. The event takes place at the IT Seminar Hall from 9:00 AM to 11:00 AM. Don't miss this opportunity to enhance your career prospects. Limited seating is available on a first-come, first-served basis. The session, recorded for your convenience, also offers co-curricular benefits with weightage upon attending, providing feedback, and updating your resume after the event. </p>
                <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
  );
}

export default Upcomingevents;
