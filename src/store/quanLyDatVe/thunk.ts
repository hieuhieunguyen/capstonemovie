import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "../../services/quanLyDatVe";

export const getChairListThunk = createAsyncThunk(
  "quanLyDatVe/getChaiListThunk",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyDatVeServices.getChairList();
      console.log(data.data.content);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
