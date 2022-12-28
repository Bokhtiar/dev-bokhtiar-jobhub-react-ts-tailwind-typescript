import { privateRequest } from "config/axios.config";
import { IJobCreate, IJobStatus } from "types/job.types";
import { PaginationParamsTypes } from "types/pagination.types";

/* List of resources */
export const index = async (reqParams: PaginationParamsTypes) => {
  return await privateRequest.get(`/api/v1/user/job`, {
    params: { ...reqParams },
  });
};

/* Store new resource */
export const store = async (data: IJobCreate) => {
  return await privateRequest.post(`/api/v1/user/job`, data);
};

/* Show specific resource */
export const show = async (id: string) => {
  return await privateRequest.get(`/api/v1/user/job/${id}`);
};

/* Apply to specific resource */
export const apply = async ({ job }: { job: string }) => {
  return await privateRequest.post(`/api/v1/user/job/apply`, { job });
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
