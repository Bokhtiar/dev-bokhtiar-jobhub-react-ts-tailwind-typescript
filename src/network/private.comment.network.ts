import { privateRequest } from "config/axios.config";

/* Store new resource */
type DataTypes = {
  job: string;
  description: string;
};
export const store = async (data: DataTypes) => {
  return await privateRequest.post(`/api/v1/user/comment`, data);
};
