import { privateRequest } from "config/axios.config";

/* Upload resource */
export const upload = async (data: any) => {
  return await privateRequest.post(`/api/v1/user/file`, data);
};
