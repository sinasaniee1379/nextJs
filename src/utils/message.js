import toast from "react-hot-toast";
export const successMessage = (mes) => {
  return toast.success(mes);
};

export const errorMessage = (mes) => {
  return toast.error(mes);
};
