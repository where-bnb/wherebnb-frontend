"use client";
import { authApi } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";
import { updateSession } from "@/lib/updateSession";

export const useAxiosAuth = () => {
  const { data: session } = useSession();
  const refreshToken = useRefreshToken();

  useEffect(() => {
    // 인증이 필요한 요청에 대해 인터셉터 설정 (헤더에 AccessToken 설정)
    const requestIntercept = authApi.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = session?.accessToken;
        }
        return config;
      },
      (error) => {
        // 요청 에러
        return Promise.reject(error);
      }
    );

    // 서버 응답 체크 후 AccessToken 만료 시 RefreshToken으로 재발급 및 재요청 로직
    const responseIntercept = authApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            await refreshToken();

            // Next-auth 세션 업데이트
            // updateSession(newToken);

            // authApi 인스턴스 디폴트 헤더 - 삭제
            authApi.defaults.headers.Authorization = "";

            // Original Request 헤더 토큰값 변경
            originalRequest.headers.Authorization = session?.accessToken;

            // 재발급된 토큰으로 재요청
            return authApi(originalRequest);
          } catch (refreshError) {
            // Refresh Token 발급 에러
            return Promise.reject(refreshError);
          }
          // 토큰 재발급 후 재요청인 경우 (Test용 코드! 추후 삭제)
        } else if (originalRequest._retry) {
          return authApi.get("/users/:id/favorite/retry");
        }
        // 응답 에러
        return Promise.reject(error);
      }
    );

    return () => {
      authApi.interceptors.request.eject(requestIntercept);
      authApi.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return authApi;
};
