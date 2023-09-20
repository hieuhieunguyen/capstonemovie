import { Card, Skeleton } from "components/ui";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getMovieListThunk } from "store/quanLyPhim/thunk";

export const HomeTemplate = () => {
  const dispatch = useAppDispatch();

  const { movieList, isFetchingMovieList } = useSelector(
    (state: RootState) => state.quanLyPhim
  );

  // dispatch action thunk call api phải dispatch trong useEffect
  useEffect(() => {
    dispatch(getMovieListThunk());
  }, [dispatch]);

  if (isFetchingMovieList) {
    return (
      <div className="grid grid-cols-4 gap-20">
        {[...Array(16)].map((_, index) => {
          return (
            <Card key={index} className="!w-[280px]">
              <Skeleton.Image active className="!w-full !h-[250px]" />
              <Skeleton.Input active className="!w-full !mt-10" />
              <Skeleton.Input active className="!w-full !mt-10" />
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-30">
      {movieList?.map((movie) => {
        return (
          <Card
            key={movie.maPhim}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={movie.hinhAnh} />}
          >
            <Card.Meta
              title={movie.tenPhim}
              description={movie.moTa.substring(0, 50)}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default HomeTemplate;
