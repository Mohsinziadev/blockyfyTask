import React from "react";


const JobsCardSkeltonLoader = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="xs:hidden border h-54 border-primaryOpacity rounded-md grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(()=>{
          return (
          <div className="w-full h-[54]  sm:border-0 sm:border-b border-primaryOpacity sm:p-[15px] p-5">
            <div className="flex xs:flex-row  sm:items-start items-center">

              <div className="w-full flex flex-col gap-[10px]">
                <div className="flex flex-col gap-4    items-start">
                  <div className="animate-pulse sm:w-[50px] md:w-[200px]  h-[10px] bg-primaryOpacity rounded-[10px]"></div>
                  <div className="animate-pulse w-[80px] h-[20px] bg-primaryOpacity rounded-[10px]"></div>
                </div>

                <div className="flex justify-between mt-5 gap-[20px]">
                  <div className="sm:w-[80px] w-[100px] flex flex-col gap-[10px]">
                    <div className="animate-pulse w-[60%] h-[10px] bg-primaryOpacity rounded-[10px]"></div>
                    <div className="animate-pulse w-full h-[5px] bg-primaryOpacity rounded-[10px]"></div>
                  </div>

                  <div className="w-full flex items-center gap-[10px]">
                    <div className="animate-pulse w-[10px] h-[10px] bg-primaryOpacity rounded-[20px]"></div>
                    <div className="animate-pulse w-[100%] h-[1px] bg-primaryOpacity rounded-[10px]"></div>
                    <div className="animate-pulse w-[10px] h-[10px] bg-primaryOpacity rounded-[20px]"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          )
        })}


      </div>
    </div>
  );
};

export default JobsCardSkeltonLoader;
