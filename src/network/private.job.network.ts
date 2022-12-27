import { privateRequest } from "config/axios.config";
import { PaginationParamsTypes } from "types/pagination.types";

/* List of resources */
export const index = async (reqParams: PaginationParamsTypes) => {
  return await privateRequest.get(`/api/v1/user/job`, {
    params: { ...reqParams },
  });
};

/* Show specific resource */
export const show = async (id: string) => {
  return await privateRequest.get(`/api/v1/user/job/${id}`);
};
