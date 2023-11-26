
import axios from "axios";
import { isUndefined } from "lodash";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const instance = axios.create({
  baseURL: process.env.REACT_APP_GATEWAY_URL,
});

type PROPS = {
  store: any;
  children: any;
};
const AxiosInterceptor: React.FC<PROPS> = ({ store, children }) => {
  const router = useRouter();
  instance.defaults.headers.post["Content-Type"] = "application/json";
  instance.defaults.timeout = 60000;

  instance.interceptors.request.use(
    (config: any) => {
      if (localStorage.getItem("token")) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    const intercetpor = instance.interceptors.response.use(
      (data) => {
        return data;
      },
      ({ response }) => {
        let settings = {
          open: true,
          status: "error",
          message: "There is something wrong",
        };
        let messageCode = "";
        if (!response) {
          messageCode = "400";
        } else {
          const status = response.status;
          switch (status) {
            case 400:
              break;
            case 401:
              router.push("/authentication/login");
              break;
            case 403:
              break;
            case 404:
              break;
            case 500:
              break;
            default:
              if (response.data && response.data.error_code) {
              } else {
                messageCode = "404";
              }
              break;
          }
        }
        return Promise.reject(response);
      }
    );
    return () => {
      axios.interceptors.response.eject(intercetpor);
    };
  }, []);
  return children;
};

export { AxiosInterceptor };
export default instance;
