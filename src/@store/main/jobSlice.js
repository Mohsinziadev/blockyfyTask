

import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";

const initialState = {
  loading: false,
  jobsData: [],
  metadata: {},
};

export const getJobs =
  () => async (dispatch) => {

    dispatch(setLoading(true));
    axiosInstance
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res in redux ", res);
        dispatch(
          setJobs({
            jobsdata: res.data,
            metadata: res.data,
          })
        );

        return dispatch(setLoading(false));
      })
      .catch((errors) => {
        console.log("error in redux ", errors);
        return dispatch(setLoading(false));
      });
  };

export const userSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setJobs: (state, action) => {
      state.jobsData = action.payload.jobsdata;
      state.metadata = action.payload.metadata;
    },
  },
});

export const { setLoading, setJobs } = userSlice.actions;

export default userSlice.reducer;

