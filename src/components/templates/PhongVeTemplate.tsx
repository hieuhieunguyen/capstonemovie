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
    <div className="main">
      <div className="relative top-0 left-0 right-0 overlay w-full h-full"></div>
      <div className="content mx-auto pt-[150px] absolute top-0 right-0 left-0 z-20">
        <div className="flex">
          <div className="">
            <div>
              <h2 className="bg-amber-500 text-center text-6xl p-[1rem] rounded">
                SCREEN
              </h2>
            </div>
            <div className="containerChair grid gap-[0.25rem] p-[1rem] mt-[2rem">
              {inforMovie.danhSachGhe.map((ghe) => {
                return (
                  <button
                    onClick={() => {
                      dispatch(quanLyDatVeActions.chairBookingsAction(ghe));
                    }}
                    className={cn(
                      "w-[2.5rem] h-[2.5rem] btn bg-gray-300 rounded",
                      {
                        booking: chairBookings.find(
                          (e) => e.tenGhe === ghe.tenGhe
                        ),
                        booked: chairBookeds.find(
                          (e) => e.tenGhe === ghe.tenGhe
                        ),
                        bookedAnotherUser: ghe.daDat,
                        gheVip: ghe.loaiGhe === "Vip",
                      }
                    )}
                  >
                    {ghe.tenGhe}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="ml-[1.25rem] result shadow-[rgba(255,255,255,_0.5)_0px_0px_16px] px-[1.5rem] py-[1.5rem] text-white">
            <h1 className="text-center text-4xl">{dataMovie.tenPhim}</h1>
            <div>
              <div className="flex justify-between py-[1rem] border-b-2 border-dotted">
                <p>Ngày chiếu giờ chiếu</p>
                <p>
                  {dataMovie.ngayChieu} -{" "}
                  <span className="text-amber-500">{dataMovie.gioChieu}</span>
                </p>
              </div>
              <div className="flex justify-between py-[1rem] border-b-2 border-dotted">
                <p>Cụm rạp</p>
                <p>{dataMovie.tenCumRap}</p>
              </div>
              <div className="flex justify-between py-[1rem] border-b-2 border-dotted">
                <p>Rạp</p>
                <p>{dataMovie.tenRap}</p>
              </div>
              <div className="flex justify-between py-[1rem] border-b-2 border-dotted">
                <p>Ghế chọn</p>
                <div className="flex flex-wrap justify-end bookedTickets">
                  {chairBookings.map((ghe) => {
                    return (
                      <div className="inline-block">
                        <span className="mr-[0.5rem] ml-[0.5rem] text-amber-500">
                          {ghe.tenGhe}
                        </span>
                        - <span>{ghe.giaVe}đ</span>,
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-between py-[1rem] mt-28 border-b-2 border-dotted">
                <p>Ưu đãi</p>
                <p>0 %</p>
              </div>
              <div className="flex justify-between py-[1rem] mt-4 border-b-2 border-dotted">
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
                  className="w-full bg-amber-500 py-[0.5rem] rounded text-white"
                >
                  BOOKING TICKET
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[2.5rem] text-white flex">
          <div className="flex ml-[1rem]">
            <button className="bg-gray-300 text-white font-bold py-3 px-3 rounded"></button>
            <span className="ml-1">Ghế thường</span>
          </div>
          <div className="flex ml-[1rem]">
            <button className="bg-amber-500 text-white font-bold py-3 px-3 rounded"></button>
            <span className="ml-1">Ghế VIP</span>
          </div>
          <div className="flex ml-[1rem]">
            <button className="bg-green-700 text-white font-bold py-3 px-3 rounded"></button>
            <span className="ml-1">Ghế đang chọn</span>
          </div>
          <div className="flex ml-[1rem]">
            <button className="bg-red-600 text-white font-bold py-3 px-3 rounded"></button>
            <span className="ml-1">Ghế đã chọn</span>
          </div>
          <div className="flex ml-[1rem]">
            <button className="bookedAnotherUser text-white font-bold py-3 px-3 rounded"></button>
            <span className="ml-1">Ghế có người chọn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhongVeTemplate;
