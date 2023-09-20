import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./quanLyNguoiDung/thunk";

export const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(getUserThunk());

export type RootState = ReturnType<(typeof store)["getState"]>;

type AppDispatch = (typeof store)["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
