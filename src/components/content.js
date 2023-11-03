import React from 'react';
import PropTypes from 'prop-types';
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

<div id='frame'>
<div>
<img src='/Frame 8.svg' id="frames"/>
</div>

<div>
<img src='/Frame 9.svg' id="frames"/>
</div>

<div>
<img src='/Frame 10.svg' id="frames"/>
</div>

<div>
<img src='/Frame 11.svg' id="frames"/>
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
 
