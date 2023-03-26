import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full font-tt-firs-neue flex justify-center">
      <div className="max-w-[1080px] w-full">
        <div className="py-3 md:px-0 ">
          <div className="flex justify-between items-center">

            <div>
              <Link  to="/CreateAJob">
                <button className="bg-[#006AB3] text-white px-4 py-3 rounded-md">Create a Job Post</button>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
