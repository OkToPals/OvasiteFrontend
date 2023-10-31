import React from 'react';
import '../styles/styles.css';

export const TopHeader = () => {
  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="bg border-b-0">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
           <path
            fill="white"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start justify-between xl:flex-row" style={{ marginTop: '100px' }}>
            <div className="w-full max-w-xl xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-left">
                Elevate Your Projects with Easy-to-Use Monitoring and Evaluation Tools.
              </h2><br/>
              <p className="max-w-xl text-base text-gray-200 md:text-lg text-left">
                OvaSite was made with the needs of field practitioners in mind. It is extremely user friendly and accessible and It works both online and offline, on any device. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
