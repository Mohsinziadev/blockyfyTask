import React from "react";

const JobsCard = (props) => {
  const {
    company,
    address,
    website,
  } = props.data;

  return (
    <div className="flex gap-4   h-full cursor-pointer transform transition duration-500 hover:scale-110">
      <div className="w-full flex py-4 h-full flex-col">
        <div className="shadow-md p-4 gap-4 flex flex-col rounded-sm h-full">
          <div className="">
            <div className="flex gap-4">
              <div className="flex w-full">
                <div className="flex flex-col">
                  <div className="text-md">{company?.name}</div>
                  <div className="text-md">{company?.catchPhrase}</div>

                  <div className="flex">
                    <div className="text-sm">{address?.city}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div>
            <p className="line-clamp-2 text-xs">{address.suite}</p>
          </div>
          <div className="flex justify-between">
            <div className="text-sm">{website}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
