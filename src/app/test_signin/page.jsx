"use client";

import { login_url } from "@/api_utils";
import axios_instance from "@/axiosInstance";
import { useState } from "react";

const TestSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const signin = async () => {
    setLoading(true)
    console.log(login_url);
    try {
      const response = await axios_instance.post(login_url, {
        email: email,
        password: password,
      });
      console.log(response.data.access_token);
      setLoading(false)
      if (response.status == 200) {
        localStorage.setItem("ovasite_jwt", response.data.access_token)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  return (
    <div className="mx-auto w-[90%] md:w-[500px] mt-10 shadow-md border p-8 flex flex-col">
      <h1 className="text-center">Sign In</h1>
      <input
        type="email"
        className="border mt-4 p-2"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value.trim())}
      />
      <input
        type="password"
        className="border mt-4 p-2"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value.trim())}
      />
      <button
        className="mt-4 rounded-sm bg-orange-600 text-white p-2 w-32"
        onClick={signin}
      >
        {loading ? "loading..." : "Sign in" }
      </button>
    </div>
  );
};

export default TestSignin;
