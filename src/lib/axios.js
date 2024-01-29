import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

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

// 인증이 필요한 요청에 대해 인터셉터 설정 // 인증이 필요한 요청에 대해 인터셉터 설정
authApi.interceptors.request.use(
  async (config) => {
    const session = await getServerSession(authOptions);
    if (session?.accessToken) {
      config.headers.Authorization = `${session.accessToken}`;
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

export { api, authApi };
