import { privateRequest } from "config/axios.config";
import { IJobStatus } from "types/job.types";
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

/* Show specific resource comments */
export const comments = async (id: string) => {
  return await privateRequest.get(`/api/v1/user/job/comments/${id}`);
};

/* Applicants list of specific resource */
export const applicants = async ({ id }: { id: string }) => {
  return await privateRequest.get(`/api/v1/user/job/applicants/${id}`);
};

/* Applicants list of specific resource */
export const applicantProfile = async ({ id }: { id: string }) => {
  return await privateRequest.get(`/api/v1/user/job/applicants/profile/${id}`);
};

/* Change specific application status */
export const changeApplicationStatus = async ({
  data,
}: {
  data: IJobStatus;
}) => {
  return await privateRequest.put(
    `/api/v1/user/job/applicants/change-status/${data.id}`,
    { status: data.status }
  );
};
