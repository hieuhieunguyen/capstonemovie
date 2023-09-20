import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";
import Input from "components/ui/Input";

const RegisterTemplate = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    // validate khi on change luôn
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });

  const navigate = useNavigate();

  // khi có error thì ko chạy vào hàm submit này
  // SubmitHandler giúp định dạng đúng cái kiểu schema mà mình định nghĩa
  const onSubmit: SubmitHandler<RegisterSchemaType> = async (value) => {
    try {
      console.log({ value });
      await quanLyNguoiDungServices.register(value);
      // toast.success("Đăng ký thành công!");
      navigate(PATH.login);
    } catch (err) {
      // toast.error(err?.response?.data?.content);
    }
  };
  return (
    <form className="pb-20 px-20" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-white text-40 font-600">Register</h2>
      <div className="mt-10">
        {/* <input
          type="text"
          placeholder="Tài khoản"
          className="outline-none block w-full p-10 text-white border border-white-300 rounded-lg bg-[#333]"
          // {...register("taiKhoan", {
          //   required: "Vui lòng nhập tài khoản",
          //   minLength: {
          //     value: 6,
          //     message: "Nhập từ 6 ký tự",
          //   },
          //   maxLength: {
          //     value: 20,
          //     message: "Nhập tối đa 20 ký tự",
          //   },
          //   // pattern: {
          //   //   value: ,
          //   //   message: 'abc'
          //   // }
          // })}
          {...register("taiKhoan")}
        />
        <p className="text-red-500">{errors?.taiKhoan?.message as string}</p> */}
        <Input
          register={register}
          name="taiKhoan"
          error={errors?.taiKhoan?.message}
          placeholder="Tài khoản"
          type="text"
        />
      </div>
      <div className="mt-10">
        <Input
          register={register}
          name="matKhau"
          error={errors?.matKhau?.message}
          placeholder="Mật khẩu"
          type="password"
        />
      </div>
      <div className="mt-10">
        <Input
          register={register}
          name="email"
          error={errors?.email?.message}
          placeholder="Email"
          type="text"
        />
      </div>
      <div className="mt-10">
        <Input
          register={register}
          name="soDt"
          error={errors?.soDt?.message}
          placeholder="Số điện thoại"
          type="text"
        />
      </div>
      <div className="mt-10">
        <Input
          register={register}
          name="maNhom"
          error={errors?.maNhom?.message}
          placeholder="Mã nhóm"
          type="text"
        />
      </div>
      <div className="mt-10">
        <Input
          register={register}
          name="hoTen"
          error={errors?.hoTen?.message}
          placeholder="Họ tên"
          type="text"
        />
      </div>
      <div className="mt-10">
        <button className="text-white w-full bg-red-500 font-500 rounded-lg text-20 px-5 py-[16px]">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterTemplate;
