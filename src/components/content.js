import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import '../styles/styles.css';
import Link from 'next/link';
export const Content = () => {
  return (
  <div style={{height:"100%"}}>
  <div id='features'>
<div><h1 id='topbtn'>Features</h1></div>
<br/>
 <div style={{fontSize:'28px',fontWeight:'700'}} id='fea'><p >Features designed to enhance your experience</p></div>
<div style={{fontSize:'20px',fontWeight:'400'}} id='fea2'><p>Experience revolutionary features for gathering, analyzing, and utilizing data. From adaptable forms to real-time insights, OvaSite empowers you</p></div> 
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 " id='correct'>
        <div className="bg-[#0073E633] min-h-[430px] rounded-2xl bg-[url('/Frame8.svg')] bg-no-repeat bg-right-bottom p-6 lg:p-14 bg-[length:40%_40%] lg:bg-auto">
          <div className="mt-4">
            <h4 className="text-2xl leading-9 font-bold">
              Data Collection and Storages
            </h4>
            <p className="text-lg leading-[24px] mt-6">
              Collection and storage of quantitative and qualitative Data from
              multiple data source while ensuring data security
            </p>
          </div>
        </div>

        <div className="bg-[#FFA50033] min-h-[430px] rounded-2xl bg-[url('/XMLID_2066_.svg')] bg-no-repeat bg-right-bottom p-6 lg:p-14 bg-[length:40%_40%] lg:bg-auto">
          <div className="mt-4">
            <h4 className="text-2xl leading-9 font-bold">
              Real-time Data Entry and Updating
            </h4>
            <p className="text-lg leading-[24px] mt-6">
              OvaSite facilitates real-time data entry and updating to ensure
              the most current information is available for analysis
            </p>
          </div>
        </div>

        <div className="bg-[#4CAF5033] min-h-[430px] rounded-2xl bg-[url('/Frame.svg')] bg-no-repeat bg-right-bottom p-6 lg:p-14 bg-[length:40%_40%] lg:bg-auto">
          <div className="mt-4">
            <h4 className="text-2xl leading-9 font-bold">
              Cost-Effective Analysis and Feedback
            </h4>
            <p className="text-lg leading-[24px] mt-6">
              After collecting your data, get instant feedback from your
              analyzed data for informed decision making.
            </p>
          </div>
        </div>

        <div className="bg-[#AF584C33] min-h-[430px] rounded-2xl bg-[url('/Group.svg')] bg-no-repeat bg-right-bottom p-6 lg:p-14 bg-[length:40%_40%] lg:bg-auto">
          <div className="mt-4">
            <h4 className="text-2xl leading-9 font-bold">Works Offline</h4>
            <p className="text-lg leading-[24px] mt-6">
              You can collect data even without an internet connection. Data
              collected offline, is automatically uploaded once your device is
              connected to the internet.
            </p>
          </div>
        </div>

      </div>



  </div>
  );
};
export default Content;
Content.PropTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText1: PropTypes.string.isRequired,
    buttonText2: PropTypes.string.isRequired,

};
 
