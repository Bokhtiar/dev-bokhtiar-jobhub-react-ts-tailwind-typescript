import { privateRequest } from "config/axios.config";
import { PaginationParamsTypes } from "types/pagination.types";

/* List of resources */
export const index = async (reqParams: PaginationParamsTypes) => {
  return await privateRequest.get(`/api/v1/user/application`, {
    params: { ...reqParams },
  });
};
