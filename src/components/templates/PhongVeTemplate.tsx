import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { quanLyDatVeActions } from "../../store/quanLyDatVe/slice";
import data from "./data.json";
import cn from "classnames";
import { getChairListThunk } from "../../store/quanLyDatVe/thunk";

const PhongVeTemplate = () => {
  const dispatch = useAppDispatch();
  const { chairBookings, chairBookeds } = useSelector(
    (state: RootState) => state.quanLyDatVe
  );

  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="w-full h-full object-cover object-center"
          src="/src/assets/images/VN-vi-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.75)]">
        <div className="absolute w-3/4 top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-md">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="bg-amber-500 text-white text-center text-6xl p-4 rounded">
                SCREEN
              </div>
              <div className="flex gap-2 flex-wrap items-center justify-center mt-6">
                {data.map((ghe) => {
                  return (
                    <div className="bg-gray-400 rounded">
                      <button
                        onClick={() => {
                          dispatch(quanLyDatVeActions.chairBookingsAction(ghe));
                        }}
                        className={cn("w-10 h-10 btn", {
                          booking: chairBookings.find(
                            (e) => e.tenGhe === ghe.tenGhe
                          ),
                          booked: chairBookeds.find(
                            (e) => e.tenGhe === ghe.tenGhe
                          ),
                        })}
                      >
                        {ghe.tenGhe}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="shadow-[rgba(255,255,255,_0.5)_0px_0px_16px] px-5 py-2 text-white rounded">
              <h1 className="text-center">Joker</h1>
              <div>
                <div className="flex justify-between mt-8">
                  <p>Ngày chiếu giờ chiếu</p>
                  <p>
                    19/12/2023 - <span>13:12</span>
                  </p>
                </div>
                <div className="flex justify-between mt-8">
                  <p>Cụm rạp</p>
                  <p>CGV - Aron Tân Bình</p>
                </div>
                <div className="flex justify-between mt-8">
                  <p>Rạp</p>
                  <p>Rạp 1</p>
                </div>
                <div className="flex justify-between mt-8">
                  <p>Ghế chọn</p>
                  <div className="flex flex-wrap justify-end">
                    {chairBookings.map((ghe) => {
                      return (
                        <div className="inline-block">
                          <span className="mr-2 ml-2">{ghe.tenGhe}</span>-{" "}
                          <span>{ghe.giaVe}</span>,
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <p>Ưu đãi</p>
                  <p>0 %</p>
                </div>
                <div className="flex justify-between mt-4">
                  <p>Tổng tiền</p>
                  <p>150.000</p>
                </div>
                <div className="mt-10">
                  <button
                    onClick={() => {
                      dispatch(getChairListThunk());
                    }}
                    className="w-full bg-amber-500 py-2 rounded text-white"
                  >
                    BOOKING TICKET
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhongVeTemplate;
