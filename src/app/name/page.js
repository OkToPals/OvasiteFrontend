'use client';

import Link from 'next/link';
import { City, Country, State } from 'country-state-city';
import { useEffect, useState } from 'react';
import Selector from '@/components/selector';

export default function Location() {
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
  //! ================================================================================

  return (
    <>
      <main className='flex flex-1'>
        <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 my-20'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-[#001233]'>
                Create your organization account?
              </h2>
            </div>

            <div className='mt-10'>
              <div>
                <form action='#' method='POST' className='space-y-6'>
                  <div>
                    <div>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium leading-6 text-[#001233]'
                      >
                        {"Full Name"}
                      </label>
                      <div className='mt-2'>
                        <input
                          id='text'
                          name='fullname'
                          type='text'
                          required
                          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'
                          placeholder='Full name'
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium leading-6 text-[#001233]'
                      >
                        {"Phone Number"}
                      </label>
                      <div className='mt-2'>
                        <input
                          id='phonenumber'
                          name='phonenumber'
                          type='phonenumber'
                          required
                          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1'
                          placeholder='Phone Number'
                        />
                      </div>
                    </div>
                  </div>

                </form>
              </div>

              <div className='mt-10'>
                <div className='relative'>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='w-full border-t border-gray-200' />
                  </div>
                </div>

                <div className='mt-6 grid grid-cols-2 gap-4'>
                  <Link
                    href='/country'
                    className='flex w-full items-center justify-center gap-3 rounded-md bg-[#001233] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
                  >
                    <button className='text-[#CAC0B3] bg-[#001233] hover:bg-gray-800 focus:outline-none font-bold'>
                      Back
                    </button>
                  </Link>

                  <Link
                    href='#'
                    className='flex w-full items-center justify-center gap-3 rounded-md bg-[#001233] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
                  >
                    
                    <button className='text-[#CAC0B3] bg-[#001233 hover:bg-gray-800 focus:outline-none font-bold'>
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            className='absolute inset-0 h-full w-full object-cover rounded-md ps-8'
            src='https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
            alt=''
          />
        </div>
      </main>
    </>
  );
}