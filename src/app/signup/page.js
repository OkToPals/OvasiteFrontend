'use client'

import React from 'react';
import Select from 'react-select';
import Link from 'next/link';
import { City, Country, State } from 'country-state-city';
import { useEffect, useState } from 'react';
import Selector from '@/components/selector';

import '@/styles/styles.css';


export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
          setPreviewImage(reader.result);
      };

      if (file) {
          reader.readAsDataURL(file);
      } else {
          setPreviewImage(null);
      }
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
 //! ================================================================================
 let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);



  const options = [
    { label: 'LinkedIn', value: 'linkedin' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Instagram', value: 'instagram' },
    { label: 'Affiliate', value: 'affiliate' },
    { label: 'Twitter(X)', value: 'twitter' },
    { label: 'Referrals', value: 'referrals' },
  ];
  
  //! ================================================================================


  return (
    <>
    <div>
      {/* first page */}
      <div style={{ display: currentStep === 1 ? 'block' : 'none' }}>
        <div id='account'> 
          <div >
            <Link href='/home'>
            <img src='Logo.jpg' width={70} style={{marginLeft:'20%',marginTop:'10px'}}/>
            </Link>  
        <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10">Create your account</h1>
            </div>

            <div className="mt-10">
              <div>
                <form action="email" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#001233]">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Email address
                    </span> 
                      
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com"
  
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#001233]">

                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Password
                    </span>  
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="{showPassword ? 'text' : 'password'}"
                        autoComplete="current-password"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password"
  
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={handleNext}
                      className="flex w-full justify-center rounded-md bg-[#FF595A] px-3 py-1.5 text-sm font-bold leading-6 text-[white] shadow-sm hover:bg-[#fe5000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001233]"
                    >
                      Sign Up
                    </button>
                    <p className="text-center mt-6 text-sm leading-6 text-[#001233]">
                      By signing up, you are indicating that you have read and agreed to our 
                      <Link href="/terms" className="font-bold text-[#FF595A] hover:text-[#001233]">
                        <span bg-white px-6 text-gray-900> Terms and Conditions.</span>
                      </Link>
                    </p>                  
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4">

                <p className="text-[#001233] text-sm mt-3 text-center">
                  Already have an account?{' '} 
                <Link href="/signin" className="font-bold text-[#FF595A] hover:text-[#001233]">
                  Sign In.
                </Link>
                </p>

                </div>
              </div>
            </div>
          </div>
        </div>
       
      
</div>
<div> <img src='Frame750.jpg'/></div>
</div>
</div>



{/* second page */}
<div style={{ display: currentStep === 2 ? 'block' : 'none' }}>
<div id='account'> 
<div>
<div >
<Link href='/home'>
<img src='Logo.jpg' width={70} style={{marginLeft:'20%',marginTop:'10px'}}/>
</Link>  

<img src='/Frame756.jpg' width={320} style={{marginLeft:'20%',marginTop:'40px'}}/>
        <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10">Create your business</h1>
            </div>

            <div className="mt-10">
              <div>
                <form action="email" method="POST" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-[#001233]">
                    <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#000000]">
                     What is your business name?
                    </span> 
                      
                    </label>
                    <div className="mt-2">
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        autoComplete="text"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your business name"
  
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='country'
                      className='block text-sm font-medium leading-6 text-[#001233]'
                    >
                      Where is your organization located?
                    </label>
                  </div>
                  <div className='mt-2'>
                    <p className='mt-1 px-3 py-2 border-collapse placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-sm sm:text-sm focus:ring-1'>
                      <label
                        class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        for='grid-city'
                      >
                        Country
                      </label>
                      
                      <Selector
                        data={countryData}
                        selected={country}
                        setSelected={setCountry}
                      />
                    </p>
                  </div>
                  
                </form>
              </div>

              <div style={{textAlign:'right',marginTop:'15%'}}>
                <button onClick={handleBack} style={{marginRight:'10px',border:'1px solid #E0E0E0'}} className=" border-0 py-2 px-6 focus:outline-none 
                rounded text-[#001233] font-medium "  > Back
                </button>

                <button onClick={handleNext} style={{}} className=" bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
                  hover:bg-[#fe5000] rounded text-[#001233]  font-bold "  >Next
                </button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
<div><img src='Frame750.jpg'/></div>
</div>
</div>


{/* third page */}
<div style={{ display: currentStep === 3 ? 'block' : 'none' }}>
<div id='account'> 
<div>
<div>
<div >
<Link href='/home'>
<img src='Logo.jpg' width={70} style={{marginLeft:'20%',marginTop:'10px'}}/>
</Link>  
<img src='/Frame7562.jpg' width={320} style={{marginLeft:'20%',marginTop:'40px'}}/>
        <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
               <h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10">Where's your business Location?</h1>
            </div>

            <div className="mt-10">
              <div>
                <form action="email" method="POST" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-[#001233]">
                    <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                     What is your business Location?
                    </span> 
                    </label >

                    <div className="mt-2" style={{display:'flex',flexDirection:'row'}}>
                    {state && (
                    <div className='mt-2'>
                      {/* <p className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'> */}
                        <label
                          className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                          for='grid-city'
                        >
                          State
                        </label>
                        <Selector
                          data={stateData}
                          selected={state}
                          setSelected={setState}
                        />
                      {/* </p> */}
                    </div>
                  )}

                  {city && (
                    <div className='mt-2 ml-8'>
                      {/* <p className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'> */}
                        <label
                          className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                          for='grid-city'
                        >
                          City
                        </label>
                        <Selector
                          data={cityData}
                          selected={city}
                          setSelected={setCity}
                        />
                      {/* </p> */}
                    </div>
                  )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#001233]">

                    <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    What’s your business address?
                    </span>  
                    </label>
                    <div className="mt-2">
                      <input
                        id="address"
                        name="address"
                        type="{showPassword ? 'text' : 'text'}"
                        autoComplete="current-password"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1 "  placeholder="Address"
  
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        id="address2"
                        name="address2"
                        type="{showPassword ? 'text' : 'text'}"
                        autoComplete="current-password"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Address Line2 (Optional)"
  
                      />
                    </div>
                  </div>

                 
                </form>
              </div>

              <div style={{textAlign:'right',marginTop:'15%'}}>
                <button onClick={handleBack} style={{marginRight:'10px',border:'1px solid #E0E0E0'}} className=" border-0 py-2 px-6 focus:outline-none 
                  rounded text-[#001233] font-medium "  > Back
                </button>

                  <button onClick={handleNext} style={{}} className=" bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
                    hover:bg-[#fe5000] rounded text-[#001233]  font-bold "  >Next
                  </button>
                </div>
            </div>
          </div>
        </div>
       </div>
    </div>
</div>
<div><img src='Frame750.jpg'/></div>
</div>
</div>

{/* Fourth Page */}
<div style={{ display: currentStep === 4 ? 'block' : 'none' }}>
<div id='account'> 
<div>
<div>
<div>
<Link href='/home'>
<img src='Logo.jpg' width={70} style={{marginLeft:'20%',marginTop:'10px'}}/>
</Link>  
<img src='/Frame7563.jpg' width={320} style={{marginLeft:'20%',marginTop:'40px'}}/>
        <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <br/>
              <h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10">Which currency do you want to use?</h1>
            </div>

            <div className="mt-10">
              <div>
                <form action="email" method="POST" className="space-y-6">
                  <div>
                    <div className="mt-2">
                      <input
                        id="address"
                        name="address"
                        type="{showPassword ? 'text' : 'text'}"
                        autoComplete="current-password"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1 "  placeholder="NGN"
  
                      />
                    </div>
                  </div>              
                </form>
              </div>

              <div style={{textAlign:'right',marginTop:'15%'}}>
                <button onClick={handleBack}  style={{marginRight:'10px',border:'1px solid #E0E0E0'}} className=" border-0 py-2 px-6 focus:outline-none 
                  rounded text-[#001233] font-medium "  > Back
                </button>

                  <button onClick={handleNext} style={{}} className=" bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
                    hover:bg-[#fe5000] rounded text-[#001233]  font-bold "  >Next
                  </button>
                </div>
            </div>
          </div>
        </div>
       </div>
    </div>
</div>
<div><img src='Frame750.jpg'/></div>
</div>
</div>

{/* fifth page */}
<div style={{ display: currentStep === 5 ? 'block' : 'none' }}>
<div id='account'> 
<div>
<div >
<Link href='/home'>
<img src='Logo.jpg' width={70} style={{marginLeft:'20%',marginTop:'10px'}}/>
</Link>  
<img src='/Frame7564.jpg' width={320} style={{marginLeft:'20%',marginTop:'40px'}}/>
        <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10">Personal Information</h1>
            </div>

            <div className="mt-10">
              <div>
                <form method="POST" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-[#001233]">
                    <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#000000]">
                     What is your name?
                    </span> 
                      
                    </label>
                    <div className="mt-2">
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        autoComplete="text"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="First and Last Name"
  
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className='block text-sm font-medium leading-6 text-[#001233]'
                    >
                      Phone Number
                    </label>
                  </div>
                  <div className="mt-2">
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        autoComplete="text"
                        required
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Phone Number"
  
                      />
                    </div>
                  
                </form>
              </div>

              <div style={{textAlign:'right',marginTop:'15%'}}>
                <button  onClick={handleBack} style={{marginRight:'10px',border:'1px solid #E0E0E0'}} className=" border-0 py-2 px-6 focus:outline-none 
                rounded text-[#001233] font-medium "  > Back
                </button>

                <button  onClick={handleNext} style={{}} className=" bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
                  hover:bg-[#fe5000] rounded text-[#001233]  font-bold "  >Next
                </button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
<div><img src='Frame750.jpg'/></div>
</div>
</div>


{/* sixth page */}
<div style={{ display: currentStep === 6 ? 'block' : 'none' }}>
<div id='account'> 
<div>
<div>
<div >
<Link href='/home'>
<img src='Logo.jpg' width={70} style={{marginLeft:'20%',marginTop:'10px'}}/>
</Link>  
<img src='/Frame7567.jpg' width={320} style={{marginLeft:'20%',marginTop:'40px'}}/>

<h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10" style={{marginLeft:'20%'}}>Business Logo</h1>
<div style={{ display: 'flex', flexDirection: 'row', marginTop: '40px', marginLeft: '20%' }}>
            <div id='preview' style={{
                height: '150px',
                width: '150px',
                backgroundColor: 'lightgray',
                borderRadius: '10px',
                marginRight: '20px',
                backgroundImage: `url(${previewImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                {/* Image will be displayed here */}
            </div>

            <div>
                <div className="file-input-wrapper">
                    <input type="file" id="custom-file-input" className="file-input" onChange={handleFileChange} />
                    <label htmlFor="custom-file-input" className="custom-file-label" style={{ borderRadius: '70px', padding: '20px' }}>Choose a File</label>
                </div>
            </div>
        </div>         
  

<br/>
<h1 style={{marginLeft:'20%'}}>Dont have a logo? Select any of the avatars?</h1>
<br/>
<div id='avater'>
<div style={{backgroundColor:'#FF595A',textAlign:'center'}}>A</div>
<div style={{backgroundColor:'#678240',textAlign:'center'}}>A</div>
<div style={{backgroundColor:'#439EBF',textAlign:'center'}}>A</div>
<div style={{backgroundColor:'#F58428',textAlign:'center'}}>A</div>

</div>
<div style={{textAlign:'center',marginTop:'15%'}}>
  <button onClick={handleBack} style={{marginRight:'10px',border:'1px solid #E0E0E0'}} className=" border-0 py-2 px-6 focus:outline-none 
    rounded text-[#001233] font-medium "  > Back
  </button>

    <button onClick={handleNext} style={{}} className=" bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
      hover:bg-[#fe5000] rounded text-[#001233]  font-bold "  >Next
    </button>
  </div>
    </div>
    </div>
  </div>
  <div><img src='Frame750.jpg'/></div>
  </div>
  </div>

  {/* seventh page  */}
  <div style={{ display: currentStep === 7 ? 'block' : 'none' }}>
<div id='account'> 
<div>
<div >
<Link href='/home'>
<img src='Logo.jpg' width={70} style={{marginLeft:'20%',marginTop:'10px'}}/>
</Link>  
<img src='/Frame7568.jpg' width={320} style={{marginLeft:'20%',marginTop:'40px'}}/>
        <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10">How did you hear about us?</h1>
            </div>

            <div className="mt-10">
              <div>
              <form method="POST" className="space-y-6">
  <Select 
     options={options}
     styles={{
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#FF595A' : 'white',
        '&:hover': {
          backgroundColor: '#FF595A',
        },
      }),
    }}
  />
</form>

              </div>

              <div style={{textAlign:'right',marginTop:'15%'}}>
                <button  onClick={handleBack} style={{marginRight:'10px',border:'1px solid #E0E0E0'}} className=" border-0 py-2 px-6 focus:outline-none 
                rounded text-[#001233] font-medium "  > Back
                </button>

                <button  onClick={handleNext} style={{}} className=" bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
                  hover:bg-[#fe5000] rounded text-[#001233]  font-bold "  >Complete
                </button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
<div><img src='Frame750.jpg'/></div>
</div>
</div>

{/* eighth page */}
<div style={{ display: currentStep === 8 ? 'block' : 'none' }}>
<div > 
<div style={{textAlign:'center',padding:'20px',height:'auto'}}>
  <div style={{display:'flex' ,justifyContent:'center',lineHeight:'70px',marginBottom:'20px'}}><img src='Logo.jpg' width={"200px"}/></div>
  <h1 style={{fontWeight:'bold',fontSize:'30px'}}>Setting up account </h1><br/>
  <p>Stay tuned as we prepare your experience. The journey begins shortly.</p>
  <img src='loading.jpg' width={'300px'}/>
</div>

</div>
</div>
</div>
    </>
  )
}
