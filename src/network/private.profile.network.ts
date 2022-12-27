import { privateRequest } from "config/axios.config";
import {
  IProfileUpdate,
  IPasswordChange,
  IProfileImageChange,
  IResumeAdd,
} from "types/profile.types";

/* Profile information */
export const me = async () => {
  return await privateRequest.get(`/api/v1/user/profile`);
};

/* Update profile information */
export const update = async ({ data }: { data: IProfileUpdate }) => {
  return await privateRequest.put(`/api/v1/user/profile`, data);
};

/* Change password */
export const changePassword = async ({ data }: { data: IPasswordChange }) => {
  return await privateRequest.put(`/api/v1/user/profile/change-password`, data);
};

/* Change profile image */
export const changeProfileImage = async ({
  data,
}: {
  data: IProfileImageChange;
}) => {
  return await privateRequest.put(
    `/api/v1/user/profile/change-profile-image`,
    data
  );
};

/* Show resume */
export const showResume = async () => {
  return await privateRequest.get(`/api/v1/user/profile/show-resume`);
};

/* Add resume */
export const addResume = async ({ data }: { data: IResumeAdd }) => {
  return await privateRequest.post(`/api/v1/user/profile/add-resume`, data);
};
