import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchSec from "./components/SearchSec";
import ReactPaginate from "react-paginate";
import PaginationLoader from "./components/PaginationLoader";
import { getJobs } from "../../@store/main/jobSlice";
import useDebounce from "../../@customHooks/useDebounce";
import JobsCardSkeltonLoader from "./components/JobsCardSkeltonLoader";
import JobsCard from "./components/JobsCard";

const limit = 10;
const Jobs = () => {
  const {
    loading: articlesLoading,
    jobsData,
    metadata,
  } = useSelector((state) => state.job);
  const dispatch = useDispatch();


  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = metadata?.hits ? Math.ceil(metadata?.hits / limit) : 0;

  useEffect(() => {
    setPageNumber(0);
  }, [debouncedSearch, selectedCategory]);

  useEffect(() => {
    dispatch(getJobs(limit, pageNumber, selectedCategory, debouncedSearch));
  }, [debouncedSearch, pageNumber, selectedCategory]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-col py-5">
      <div>
        <SearchSec
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="w-full ">
          <div>
            {articlesLoading ? (
              <div>
                <JobsCardSkeltonLoader />
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-4">
                  {jobsData?.map((data) => {
                  return (
                    <div key={data._id} className="w-full h-54">
                      <JobsCard data={data} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="mt-5">
            {articlesLoading ? (
              <>
                <PaginationLoader />
              </>
            ) : (
              <div className="flex justify-center">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  forcePage={pageNumber}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Jobs;
