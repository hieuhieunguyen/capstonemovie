import { Tabs } from "components/ui";
import AccountInfoTab from "./AccountInfoTab";

export const AccountTemplate = () => {
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
            children: <div className="min-h-full">tabs 1</div>,
          },
        ]}
      />
    </div>
  );
};

export default AccountTemplate;
