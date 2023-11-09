"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import "@/styles/styles.css";
import { useForm } from "react-hook-form";
import axiosInstance from "@/lib/axios";
import Image from 'next/image';

export default function Signin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  // ================================================================

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("form data", data);

    axiosInstance
      .post("auth/login", data)
      .then((response) => {
        const access_token = response?.data?.access_token;
        localStorage.setItem("access_token", access_token);
      })
      .catch((e) => console.log(e));

    // handleNext()
  };

  return (
    <>
      <div>
        {/* first page */}
        <div>
          <div id="account">
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
              <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                  <div>
                    <h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10">
                      Welcome Back
                    </h1>
                  </div>

                  <div className="mt-10">
                    <div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1"
                              placeholder="email"
                              {...register("email")}
                            />
                          </div>
                        </div>

                        <div className="mt-2 relative">
                          <input
                            id="password"
                            name="password"
                            type={passwordVisible ? "text" : "password"}
                            autoComplete="current-password"
                            required
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Password"
                            {...register("password")}
                          />
                          <Image
                            src={passwordVisible ? 'show.png' : '/hide.png'}
                            alt={passwordVisible ? 'Show Password' : 'Hide Password'}
                            className="absolute top-1/2 transform -translate-y-1/2 right-2 w-5 h-5 cursor-pointer"
                            onClick={togglePasswordVisibility}
                            width={100}
                            height={100}

                          />
    
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded border-[#001233] text-[#001233] focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-3 block text-sm leading-6 text-[#001233]"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="text-sm leading-6">
                            <Link
                              href="/ForgotPassword"
                              className="font-semibold text-[#001233] hover:text-[#001233]"
                            >
                              Forgot password?
                            </Link>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#FF595A] px-3 py-1.5 text-sm font-bold leading-6 text-[white] shadow-sm hover:bg-[#fe5000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001233]"
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="mt-10">
                      <div className="relative">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="w-full border-t border-gray-200" />
                        </div>
                      </div>

                      <div className="mt-6 grid gap-4">
                        <p className="text-[#001233] text-sm mt-3 text-center">
                          Don&apos;t have an account?{" "}
                          <Link
                            href="/signup"
                            className="font-bold text-[#FF595A] hover:text-[#001233]"
                          >
                            Sign Up.
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <Image src="/Frame750.jpg" width={700} height={700} alt='imagery'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
