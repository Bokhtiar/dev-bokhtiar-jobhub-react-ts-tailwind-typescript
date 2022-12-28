import { publicRequest } from "config/axios.config";

/* Show list of resources */
export const index = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  return await publicRequest.get(
    `/api/v1/public/jobs?page=${page}&limit=${limit}`
  );
};

/* Show specifi resource */
export const show = async ({ id }: { id: string }) => {
  return await publicRequest.get(`/api/v1/public/jobs/${id}`);
};

/* Search list of resources */
export const search = async ({ query }: { query: string }) => {
  return await publicRequest.get(`/api/v1/public/jobs?query=${query}`);
};

/* Comment list of resources */
export const comments = async ({ id }: { id: string }) => {
  return await publicRequest.get(`/api/v1/public/comments/${id}`);
};

