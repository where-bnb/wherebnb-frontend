import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { updateSession } from "@/lib/updateSession";

// 일반 Axios 인스턴스
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인증이 필요한 Axios 인스턴스
const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인증이 필요한 요청에 대해 인터셉터 설정 (헤더에 AccessToken 설정)
authApi.interceptors.request.use(
  async (config) => {
    const session = await getServerSession(authOptions);
    if (!config.headers.Authorization) {
      config.headers.Authorization = session.accessToken;
    }

    console.log("변경된 토큰?", config.headers.Authorization);
    return config;
  },
  (error) => {
    // 요청 에러
    return Promise.reject(error);
  }
);

// 서버 응답 체크 후 AccessToken 만료 시 RefreshToken으로 재발급 및 재요청 로직
authApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const session = await getServerSession(authOptions);

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await api.post(
          "/auth/refresh",
          {},
          {
            headers: {
              RefreshToken: session.refreshToken,
            },
          }
        );
        const newToken = await refreshToken.headers.get("NewAccessToken");

        // Next-auth 세션 업데이트
        // updateSession(newToken);

        // authApi 인스턴스 디폴트 헤더 - 새로운 토큰값으로 변경
        authApi.defaults.headers.Authorization = newToken;

        // Original Request 헤더 - 새로운 토큰값으로 변경
        originalRequest.headers.Authorization = newToken;

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

export { api, authApi };
