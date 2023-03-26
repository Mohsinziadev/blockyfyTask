import React, { useState } from "react";
import JobInformaton from "./components/JobInformaton";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Stapper from "./components/Stapper";
import CandiateType from "./components/CandiateType";
import ShiftTiming from "./components/ShiftTiming";
import { Link } from "react-router-dom";

let count = 0;
const CreateAJob = () => {
  const [activeState, setActiveState] = useState(0);

  const handleIncrement = () => {
    if (count < 2) {
      setActiveState(activeState + 1);
      count ++;
    }
  };
  const handleDecrement  = () =>{
    if (count !== 0) {
      setActiveState(activeState - 1);
      count--;
    }
  }
  return (
    <div>
      <div className="flex justify-between mt-10 px-10 py-5">
        <div className="flex flex-col">
          <h3 className="text-[#006AB3] text-[36px]">CREATE A JOB POST </h3>
          <p className="text-[16px]">
            Complete the followings steps to create effective job post{" "}
          </p>
        </div>

        <div className="flex justify-center items-center">
        <Link to="/">
            <XCircleIcon className="h-10 w-10 text-blue-500 cursor-pointer shadow-md rounded-full " /></Link>
        </div>
      </div>
      <div className="border-t px-10 py-2">
        <div className="flex flex-col">
          <div className="text-[#006AB3] text-[14px]">steps 1of 3</div>
          <div className="mt-5">
            <Stapper activeState={activeState} />
          </div>
          {activeState === 0 ? <JobInformaton /> : activeState === 1 ? <CandiateType /> : <ShiftTiming /> }

        </div>
      </div>
      <div className="flex justify-between my-10 md:px-10 px-5 py-10">
        <button className="bg-white border rounded-md px-10 md:px-20 py-2" onClick={handleDecrement}>
          Previous
        </button>
        <button
          className="bg-[#006BB3] text-white border rounded-md px-10 md:px-20 py-2"
          onClick={handleIncrement}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateAJob;
