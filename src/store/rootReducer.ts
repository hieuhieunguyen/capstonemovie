import { combineReducers } from "@reduxjs/toolkit";
import { quanLyDatVeReducer } from "./quanLyDatVe/slice";

export const rootReducer = combineReducers({
  quanLyDatVe: quanLyDatVeReducer,
});
