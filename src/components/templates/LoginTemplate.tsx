import { useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "schema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "store";
import { loginThunk } from "store/quanLyNguoiDung/thunk";
import Input from "components/ui/Input";

const LoginTemplate = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginSchemaType> = async (value) => {
    dispatch(loginThunk(value))
      .unwrap()
      .then(() => {
        // toast.success("Đăng ký thành công!");
        navigate("/");
      });
  };

  return (
    <form className="pt-[30px] pb-[60px]" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-white text-40 font-600">Sign In</h2>
      <div className="mt-40">
        <Input
          register={register}
          name="taiKhoan"
          error={errors?.taiKhoan?.message}
          placeholder="Tài khoản"
          type="text"
        />
      </div>
      <div className="mt-40">
        <Input
          register={register}
          name="matKhau"
          error={errors?.matKhau?.message}
          placeholder="Mật khẩu"
          type="password"
        />
      </div>
      <div className="mt-40">
        <button className="text-white w-full bg-red-500 font-500 rounded-lg text-20 px-5 py-[16px]">
          Sign In
        </button>
        <p className="mt-30 text-white">
          Chưa có tài khoản?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              navigate(PATH.register);
            }}
          >
            Đăng ký
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginTemplate;
