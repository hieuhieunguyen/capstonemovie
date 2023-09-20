import { useSelector } from "react-redux";
import { RootState } from "store";

// Lấy thông tin user đăng nhập
export const useAuth = () => {
  const { user } = useSelector((state: RootState) => state.quanLyNguoiDung);
  return { user };
};
