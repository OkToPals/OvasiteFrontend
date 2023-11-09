import { City, Country } from "country-state-city";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Selector from '@/components/selector';

let countryData = Country.getAllCountries();

function PageThree() {
  const [cityData, setCityData] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [stateData, setStateData] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const [country, setCountry] = useState(countryData[0]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  //! ================================================================================

  const options = [
    { label: "LinkedIn", value: "linkedin" },
    { label: "Facebook", value: "facebook" },
    { label: "Instagram", value: "instagram" },
    { label: "Affiliate", value: "affiliate" },
    { label: "Twitter(X)", value: "twitter" },
    { label: "Referrals", value: "referrals" },
  ];

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);
  useEffect(() => {
    if (country?.isoCode && state?.isoCode) {
      setCityData(City.getCitiesOfState(country.isoCode, state.isoCode));
    }
  }, [country?.isoCode, state?.isoCode]);
  
  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  return (
    <>
      <div style={{ display: currentStep === 3 ? "block" : "none" }}>
        <div id="account">
          <div>
            <div>
              <div>
                <Link href="/home">
                  <Image
                  src="/Logo.jpg"
                  width={70}
                  height={100}
                  style={{ marginLeft: "20%", marginTop: "10px" }}
                  alt='imagery'
                />
                </Link>
                <Image
                  src="/Frame7562.jpg"
                  width={400}
                  height={100}
                  style={{ marginLeft: "20%", marginTop: "40px" }}
                  alt='imagery'
                />
                <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                  <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                      <h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10">
                        Where&apos;s your business Location?
                      </h1>
                    </div>

                    <div className="mt-10">
                      <div>
                        <form
                          action="email"
                          method="POST"
                          className="space-y-6"
                        >
                          <div>
                            <label className="block text-sm font-medium leading-6 text-[#001233]">
                              <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                What is your business Location?
                              </span>
                            </label>

                            <div
                              className="mt-2"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              {state && (
                                <div className="mt-2">
                                  {/* <p className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'> */}
                                  <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-city"
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
                                <div className="mt-2 ml-8">
                                  {/* <p className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'> */}
                                  <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-city"
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
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-[#001233]"
                            >
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
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1 "
                                placeholder="Address"
                              />
                            </div>
                            <div className="mt-2">
                              <input
                                id="address2"
                                name="address2"
                                type="{showPassword ? 'text' : 'text'}"
                                autoComplete="current-password"
                                required
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Address Line2 (Optional)"
                              />
                            </div>
                          </div>
                        </form>
                      </div>

                      <div style={{ textAlign: "right", marginTop: "15%" }}>
                        <button
                          onClick={handleBack}
                          style={{
                            marginRight: "10px",
                            border: "1px solid #E0E0E0",
                          }}
                          className=" border-0 py-2 px-6 focus:outline-none 
                  rounded text-[#001233] font-medium "
                        >
                          {" "}
                          Back
                        </button>

                        <button
                          onClick={handleNext}
                          style={{}}
                          className=" bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
                    hover:bg-[#fe5000] rounded text-[#001233]  font-bold "
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
             <Image src="/Frame750.jpg" width={700} height={700} alt='imagery'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageThree;
