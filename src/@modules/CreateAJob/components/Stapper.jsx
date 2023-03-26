import React, { useState } from "react";

const Stapper = (props) => {

  const { activeState } =props;
  const steps = ["Customer Info", "Shipping Info", "Payment"];

  return (
    <div className="flex w-full bg-[#eaeaea] ">
      {steps.map((data,i)=>{
       return(
         <div className={`w-1/3 flex justify-center py-3 items-center  text-white ${i <= activeState ? "bg-[#006AB3] text-white  " : "text-[#495057]"} ${activeState === i && "bg-[#006AB3] rounded-r-full"} `}>
           <h3>{data}</h3>
         </div>
       )
      })}
    </div>
  );
};

export default Stapper;
