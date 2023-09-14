import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { getChairListThunk } from "../store/quanLyDatVe/thunk";

const Demo = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(getChairListThunk());
          navigate("/chitietphongve");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        test
      </button>
    </div>
  );
};

export default Demo;
