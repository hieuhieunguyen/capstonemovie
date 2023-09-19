import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { quanLyDatVeActions } from "../../store/quanLyDatVe/slice";
import cn from "classnames";
import { useParams } from "react-router-dom";
import {
  buyTicketsThunk,
  getChairListThunk,
} from "../../store/quanLyDatVe/thunk";
import { useEffect } from "react";

const PhongVeTemplate = () => {
  const dispatch = useAppDispatch();
  const { chairBookings, chairBookeds, inforMovie } = useSelector(
    (state: RootState) => state.quanLyDatVe
  );

  const dataMovie = inforMovie.thongTinPhim;

  const parmas = useParams();
  const { maLichChieu } = parmas;

  if (maLichChieu) {
    useEffect(() => {
      dispatch(getChairListThunk(maLichChieu));
    }, [dispatch]);
  }

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
              <div className="flex gap-2 flex-wrap items-center mt-6 pl-4">
                {inforMovie.danhSachGhe.map((ghe) => {
                  return (
                    <button
                      onClick={() => {
                        dispatch(quanLyDatVeActions.chairBookingsAction(ghe));
                      }}
                      className={cn("w-10 h-10 btn bg-gray-300 rounded", {
                        booking: chairBookings.find(
                          (e) => e.tenGhe === ghe.tenGhe
                        ),
                        booked: chairBookeds.find(
                          (e) => e.tenGhe === ghe.tenGhe
                        ),
                        bookedAnotherUser: ghe.daDat,
                        gheVip: ghe.loaiGhe === "Vip",
                      })}
                    >
                      {ghe.tenGhe}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="shadow-[rgba(255,255,255,_0.5)_0px_0px_16px] px-5 py-2 text-white rounded">
              <h1 className="text-center text-4xl">{dataMovie.tenPhim}</h1>
              <div>
                <div className="flex justify-between py-6 border-b-2 border-dotted">
                  <p>Ngày chiếu giờ chiếu</p>
                  <p>
                    {dataMovie.ngayChieu} -{" "}
                    <span className="text-amber-500">{dataMovie.gioChieu}</span>
                  </p>
                </div>
                <div className="flex justify-between py-6 border-b-2 border-dotted">
                  <p>Cụm rạp</p>
                  <p>{dataMovie.tenCumRap}</p>
                </div>
                <div className="flex justify-between py-6 border-b-2 border-dotted">
                  <p>Rạp</p>
                  <p>{dataMovie.tenRap}</p>
                </div>
                <div className="flex justify-between py-6 border-b-2 border-dotted">
                  <p>Ghế chọn</p>
                  <div className="flex flex-wrap justify-end">
                    {chairBookings.map((ghe) => {
                      return (
                        <div className="inline-block">
                          <span className="mr-2 ml-2 text-amber-500">
                            {ghe.tenGhe}
                          </span>
                          - <span>{ghe.giaVe}đ</span>,
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-between py-6 mt-28 border-b-2 border-dotted">
                  <p>Ưu đãi</p>
                  <p>0 %</p>
                </div>
                <div className="flex justify-between py-6 mt-4 border-b-2 border-dotted">
                  <p>Tổng tiền</p>
                  <p>
                    {chairBookings.reduce(
                      (total, ghe) => (total += ghe.giaVe),
                      0
                    )}
                    đ
                  </p>
                </div>
                <div className="mt-10">
                  <button
                    onClick={() => {
                      dispatch(quanLyDatVeActions.chairBookedsAction());
                      console.log("chairBookings: ", chairBookings);
                      dispatch(
                        buyTicketsThunk({
                          maLichChieu: maLichChieu,
                          danhSachVe: chairBookings,
                        })
                      );
                    }}
                    className="w-full bg-amber-500 py-2 rounded text-white"
                  >
                    BOOKING TICKET
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-white flex">
            <div className="flex ml-4">
              <button className="bg-gray-300 text-white font-bold py-3 px-3 rounded"></button>
              <span className="ml-1">Ghế thường</span>
            </div>
            <div className="flex ml-4">
              <button className="bg-amber-500 text-white font-bold py-3 px-3 rounded"></button>
              <span className="ml-1">Ghế VIP</span>
            </div>
            <div className="flex ml-4">
              <button className="bg-green-700 text-white font-bold py-3 px-3 rounded"></button>
              <span className="ml-1">Ghế đang chọn</span>
            </div>
            <div className="flex ml-4">
              <button className="bg-red-600 text-white font-bold py-3 px-3 rounded"></button>
              <span className="ml-1">Ghế đã chọn</span>
            </div>
            <div className="flex ml-4">
              <button className="bookedAnotherUser text-white font-bold py-3 px-3 rounded"></button>
              <span className="ml-1">Ghế thường</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhongVeTemplate;
