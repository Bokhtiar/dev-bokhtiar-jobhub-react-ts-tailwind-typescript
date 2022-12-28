import { publicRequest } from "config/axios.config";

/* Show list of resources */
export type IndexParamsTypes = {
  page: number;
  limit: number;
  query?: string;
};
export const index = async (reqParams: IndexParamsTypes) => {
  return await publicRequest.get(`/api/v1/public/jobs`, {
    params: { ...reqParams },
  });
};

/* Show specifi resource */
export const show = async ({ id }: { id: string }) => {
  return await publicRequest.get(`/api/v1/public/jobs/${id}`);
};

/* Comment list of resources */
export const comments = async ({ id }: { id: string }) => {
  return await publicRequest.get(`/api/v1/public/comments/${id}`);
};
