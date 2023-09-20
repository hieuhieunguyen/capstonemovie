import { Tabs } from "components/ui";
import AccountInfoTab from "./AccountInfoTab";
import { useSelector } from "react-redux";

export const AccountTemplate = () => {
  const { user } = useSelector((state: any) => state.quanLyNguoiDung);
  const data = user?.thongTinDatVe;

  return (
    <div>
      <Tabs
        tabPosition="left"
        className="h-full"
        tabBarGutter={-5}
        items={[
          {
            label: (
              <div className="w-[150px] text-left hover:bg-gray-400 hover:text-white rounded-lg transition-all p-10 text-black">
                Thông tin tài khoản
              </div>
            ),
            key: "accountInfo",
            children: <AccountInfoTab />,
          },
          {
            label: (
              <div className="w-[150px] text-left hover:bg-gray-400 hover:text-white rounded-lg transition-all p-10 text-black">
                Thông tin vé đã đặt
              </div>
            ),
            key: "ticketInfo",
            children: (
              <div className="min-h-full">
                <h2 className="text-center text-4xl">Lịch sử đặt vé</h2>
                <div>
                  {data.map((e: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="mt-[30px] contentTickets p-5 flex text-xl rounded"
                      >
                        <div>
                          <img
                            className="w-[250px] h-full object-contain rounded"
                            src={e?.hinhAnh}
                            alt=""
                          />
                        </div>
                        <div className="pl-[3.5rem]">
                          <h1 className="text-3xl font-600">{e?.tenPhim}</h1>
                          <div className="opacity-80 mt-10">
                            <p>
                              Cụm rạp:{" "}
                              <span className="ml-4">
                                {e?.danhSachGhe[0]?.maHeThongRap}
                              </span>
                            </p>
                            <p>
                              Khu vực chiếu:{" "}
                              <span className="ml-4">
                                {e?.danhSachGhe[0]?.tenCumRap}
                              </span>
                            </p>
                            <p>
                              Vị trí ghế:{" "}
                              {e?.danhSachGhe.map((e: any, index: number) => {
                                return (
                                  <span
                                    key={index}
                                    className="mx-2 text-red-500"
                                  >
                                    {e?.tenGhe},
                                  </span>
                                );
                              })}
                            </p>
                            <p>
                              Giá vé: <span>{e?.giaVe}</span>
                            </p>
                            <p>
                              Thời lượng phim: <span>{e?.thoiLuongPhim}</span>
                            </p>
                            <p>
                              Ngày đặt: <span>{e.ngayDat}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default AccountTemplate;
