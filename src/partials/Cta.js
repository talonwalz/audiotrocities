import React from 'react';
import appstore from '../images/appstore.png';

function Cta() {
  return (
    <section id="download">
      <div className="max-w-6xl mt-20 mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-teal-50 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Ready to give our a app a try?</h3>
                <p className="text-white text-lg opacity-75">We have a generous free tier available to get you started right away.</p>
              </div>

              {/* CTA button */}
              <div >
                <a className="btn relative flex space-x-4 text-gray-900 hover:text-teal-50 bg-gradient-to-r from-blue-100 to-white" href="#0">
                  <img src={appstore} alt="App store"/>
                  <p>Download now</p>
                </a>
                
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
