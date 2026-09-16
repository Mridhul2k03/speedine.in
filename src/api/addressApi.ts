import axiosInstance from "./axiosInstance";

export const addUserAddress = async (formData: any) => {
  const res = await axiosInstance.post("/users/user-address/", formData);
  return res.data;
};
