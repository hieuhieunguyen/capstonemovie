import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "services";

export const getMovieListThunk = createAsyncThunk(
  "quanLyPhim/getMovieListThunk",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyPhimServices.getMovieList();
      // sleep
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
