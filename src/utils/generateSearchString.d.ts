import qs from "qs";

export const generateSearchString = (parmas: string) => {
  const searchString = qs.stringify(parmas, {
    addQueryPrefix: true,
  });
  return searchString;
};
