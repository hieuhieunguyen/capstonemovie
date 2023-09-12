import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "../../services/quanLyDatVe";

export const getChairListThunk = createAsyncThunk(
  "quanLyDatVe/getChairListThunk",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyDatVeServices.getChairList();
      console.log(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
