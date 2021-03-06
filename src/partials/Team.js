import React from 'react';

function Team() {
  return (
    <section id="team" className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">The humans behind Audiomojis</h2>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/GlennS.jpeg').default} width="120" height="120" alt="Team member 01" />
                <h4 className="text-xl font-bold mb-1">Glenn Sugden</h4>
                <div className="text-teal-50 font-medium mb-2">CEO & Co-founder</div>
                <p className="text-gray-600 text-center mb-3">Experienced Founder with a demonstrated history of working in the e-learning industry. Skilled in iOS Design, Computer Science, Game Programming, Media Production, and HTML. Strong entrepreneurship professional with a Bachelor of Science (BS) focused in Computer Science from University of California, Berkeley.</p>
                <div className="text-sm text-gray-600 font-medium">
                · <a className="text-gray-900 hover:underline" target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/glenn-s-0408b03b/">LinkedIn</a> · 
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-02.jpg').default} width="120" height="120" alt="Team member 02" />
                <h4 className="text-xl font-bold mb-1">Dave Roberts</h4>
                <div className="text-teal-50 font-medium mb-2">CTO & Co-founder</div>
                <p className="text-gray-600 text-center mb-3">In the past 19 years I have helped our businesses grow from local companies to a country wide powers. In the last 10 years we went from 6 employees to an Inc. 5000 company and have over 22000 clients nationwide. I love Sales and Marketing, it's what drives me. I enjoy developing Sales and Marketing approaches that move businesses to the next level.</p>
                <div className="text-sm text-gray-600 font-medium">
                  · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a> ·
                </div>
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/TannerR.jpeg').default} width="120" height="120" alt="Team member 03" />
                <h4 className="text-xl font-bold mb-1">Tanner Roberts</h4>
                <div className="text-teal-50 font-medium mb-2">iOS Engineer</div>
                <p className="text-gray-600 text-center mb-3">A Utah native that loves sports, video games, music, and the outdoors.</p>
                <div className="text-sm text-gray-600 font-medium">
                  · <a className="text-gray-900 hover:underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tannerroberts1/">LinkedIn</a> ·
                </div>
              </div>
            </div>

            {/* 4th member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/BenH.jpeg').default} width="120" height="120" alt="Team member 05" />
                <h4 className="text-xl font-bold mb-1">Ben Hannah</h4>
                <div className="text-teal-50 font-medium mb-2">Head of Design</div>
                <p className="text-gray-600 text-center mb-3">Waiting on this...</p>
                <div className="text-sm text-gray-600 font-medium">
                  · <a className="text-gray-900 hover:underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ben-hannah-9aa68140/">LinkedIn</a> ·
                </div>
              </div>
            </div>

            {/* 5th member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/talon.jpg').default} width="120" height="120" alt="Team member 04" />
                <h4 className="text-xl font-bold mb-1">Talon Walz</h4>
                <div className="text-teal-50 font-medium mb-2">Software Engineer</div>
                <p className="text-gray-600 text-center mb-3">Born and raised in Sedona, AZ and is now happily married and lives in Saratoga Springs, UT. Enjoys getting outside and being active.</p>
                <div className="text-sm text-gray-600 font-medium">
                  · <a className="text-gray-900 hover:underline" target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/talon-walz/">LinkedIn</a> ·
                </div>
              </div>
            </div>

            

            {/* 6th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-06.jpg').default} width="120" height="120" alt="Team member 06" />
                <h4 className="text-xl font-bold mb-1">Quin Lopez</h4>
                <div className="text-teal-50 font-medium mb-2">Front-end Engineer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

            {/* 7th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="900" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-07.jpg').default} width="120" height="120" alt="Team member 07" />
                <h4 className="text-xl font-bold mb-1">Tamara Hastings</h4>
                <div className="text-blue-600 font-medium mb-2">Product Developer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

            {/* 8th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1050" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-08.jpg').default} width="120" height="120" alt="Team member 08" />
                <h4 className="text-xl font-bold mb-1">Rachel Vervack</h4>
                <div className="text-blue-600 font-medium mb-2">Senior Data Scientist</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

            {/* 9th member */}
            {/* <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/team-member-09.jpg').default} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl font-bold mb-1">Andrew Laurencio</h4>
                <div className="text-blue-600 font-medium mb-2">Front-end Engineer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;