import { generatePath, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { getChairListThunk } from "../store/quanLyDatVe/thunk";
import { PATH } from "../constants/config";

const Demo = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const path = generatePath(PATH.chitietphongve, { maLichChieu: "16909" });

  return (
    <div>
      <button
        onClick={() => {
          dispatch(getChairListThunk("16909"));
          navigate(path);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        test
      </button>
    </div>
  );
};

export default Demo;
