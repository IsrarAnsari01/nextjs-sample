import { toast } from "react-toastify";

function useAlert() {
  const success = (msg) =>
    toast.success(msg, {
      position: "top-center",
    });

  const error = (msg) =>
    toast.error(msg, {
      position: "top-center",
    });

  return { success, error };
}

export default useAlert;
