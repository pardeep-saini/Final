import { SEARCH_RESULT } from "./serachAccountConstant";

export const getSearchByAccount = resultObject => {
  const type = SEARCH_RESULT;
  return { type, resultObject };
};

