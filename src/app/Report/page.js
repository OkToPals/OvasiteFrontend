"use client";
import React, { useState } from "react";

function page() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");

  const handleDownload = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Set content for the PDF
    const content = `Organization Name: ${input1}\n\n Date: ${input2}\n\n Reported By: ${input3}\n\n Executive Summary: ${input4}\n\n Introduction: ${input5}\n\n Data Collection Methodology: ${input6}\n\n Conclusion: ${input7}`;

    // Add the content to the PDF
    doc.text(content, 10, 10);

    // Save the PDF as a file
    doc.save("Downloaded-Report.pdf");
  };
  return (
    <>
      <div className="p-8 bg-[#EBEAEA]">
        <div className="flex justify-center gap-5">
          <div className="flex flex-col">
            <h1 className="font-semibold">Organization Name</h1>
            <input
              type="text"
              placeholder="Enter Organization Name"
              className="h-[35px] w-[350px] rounded-md p-2"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Date</h1>
            <input type="date" className="h-[35px] w-[350px] rounded-md p-2" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Reported By</h1>
            <input
              type="text"
              placeholder="Reporting Officer"
              className="h-[35px] w-[350px] rounded-md p-2"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-10">
        <div className="p-10">
          <h1 className="mb-5 font-semibold">Executive Summary</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
            className=" w-full p-2 bg-white rounded-md border-2 border-gray-300 "
          ></textarea>
        </div>

        <div className="p-10">
          <h1 className="mb-5 font-semibold">Introduction</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={input5}
            onChange={(e) => setInput5(e.target.value)}
            className=" w-full p-2 bg-white border-gray-300 rounded-md"
          ></textarea>
        </div>

        <div className="p-10">
          <h1 className="mb-5 font-semibold">Data Collection Methodology</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={input6}
            onChange={(e) => setInput6(e.target.value)}
            className=" w-full p-2 bg-white border-gray-300 rounded-md"
          ></textarea>
        </div>

        <div className="p-10">
          <h1 className="mb-5 font-semibold">Challenges & Recommendation</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={input7}
            onChange={(e) => setInput7(e.target.value)}
            className=" w-full p-2 bg-white border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="p-10">
          <h1 className="mb-5 font-semibold">Conclusion</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={input8}
            onChange={(e) => setInput8(e.target.value)}
            className=" w-full p-2 bg-white border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-end gap-4">
          <button className="outline-black p-2 bg-red-500 text-xs rounded-md text-white">
            Generate Report
          </button>
          <button
            onClick={handleDownload}
            className="bg-[#FF595A] text-white p-2 rounded-md text-xs"
          >
            Download Report
          </button>
        </div>
      </div>
    </>
  );
}

export default page;
