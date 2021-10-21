import RhApi from "@/rh/apis";
import { useCallback } from "react";

export default () => {
  const getUserInfo = useCallback((params) => {
    return RhApi.Base.userGetUserInfo(params);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userLogin = useCallback((params) => {
    // return RhApi.Base.userLogin(params);
    return Promise.resolve({
      expireTime: "1634820099130",
      firstLogin: true,
      token: "eyJ0eXAiOiJKV1QiLCJhbGc",
    });
  }, []);

  return { getUserInfo, userLogin };
};
