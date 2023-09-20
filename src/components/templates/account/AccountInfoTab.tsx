import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/ui";
import Input from "components/ui/Input";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AccountSchema, AccountSchemaType } from "schema/AccountSchema";
import { RootState, useAppDispatch } from "store";
import { getUserThunk, updateUserThunk } from "store/quanLyNguoiDung/thunk";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AccountInfoTab = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const { isUpdatingUser } = useSelector(
    (state: RootState) => state.quanLyNguoiDung
  );

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AccountSchema),
  });

  // giúp đưa thông tin vào ô input và thường đc sử dụng trong useEffect
  useEffect(() => {
    reset({
      ...user,
      soDt: user?.soDT,
    });
  }, [user, reset]);

  const onSubmit: SubmitHandler<AccountSchemaType> = (value) => {
    dispatch(updateUserThunk(value))
      .unwrap()
      .then(() => {
        // toast.success("Cập nhật thông tin thành công!");
      });
  };

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  return (
    <form className="px-40" onSubmit={handleSubmit(onSubmit)}>
      <InputS
        label="Tài khoản"
        name="taiKhoan"
        register={register}
        error={errors?.taiKhoan?.message}
      />
      <InputS
        label="Mật khẩu"
        name="matKhau"
        register={register}
        error={errors?.matKhau?.message}
      />
      <InputS
        label="Họ và tên"
        name="hoTen"
        register={register}
        error={errors?.hoTen?.message}
      />
      <InputS
        label="Số điện thoại"
        name="soDt"
        register={register}
        error={errors?.soDt?.message}
      />
      <InputS
        label="Email"
        name="email"
        register={register}
        error={errors?.email?.message}
      />
      <InputS
        label="Mã nhóm"
        name="maNhom"
        register={register}
        error={errors?.maNhom?.message}
      />
      <InputS
        disabled
        label="Mã người dùng"
        name="maLoaiNguoiDung"
        register={register}
        error={errors?.maLoaiNguoiDung?.message}
      />
      <div className="text-right">
        <Button
          loading={isUpdatingUser}
          htmlType="submit"
          className="mt-[60px] w-[200px] !h-[50px]"
          type="primary"
        >
          Lưu thay đổi
        </Button>
      </div>
    </form>
  );
};

export default AccountInfoTab;

// kế thừa từ component Input
const InputS = styled(Input)`
  margin-top: 10px;
  input {
    background-color: transparent !important;
    border: 1px solid black;
    color: black;
  }
`;
