import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "../../services/quanLyDatVe";
import { InfoTickets } from "../../types/QuanLyDatVe";

export const getChairListThunk = createAsyncThunk(
  "quanLyDatVe/getChaiListThunk",
  async (payload: string, { rejectWithValue }) => {
    try {
      const data = await quanLyDatVeServices.getChairList(payload);
      console.log("data: ", data);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const buyTicketsThunk = createAsyncThunk(
  "quanLyDatVe/buyTickets",
  async (payload: InfoTickets, { rejectWithValue }) => {
    try {
      await quanLyDatVeServices.buyTicket(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
