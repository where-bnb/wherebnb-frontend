import { http, HttpResponse } from "msw";

export const handlers = [
  // credentials
  http.post("/auth/token", () => {
    console.log("로그인 -> access token 생성");
    return HttpResponse.json(
      {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        expTime: 3600,
        userId: 32,
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      }
    );
  }),
  http.post("/auth/refresh", () => {
    console.log("refresh token 실행");
    return HttpResponse.json(
      {},
      {
        headers: {
          NewAccessToken: "Bearer refreshed ---token ,.,..",
        },
      }
    );
  }),
  http.post("/users", async ({ request }) => {
    console.log("회원가입");
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
  http.get("/users/:userId", async ({ request }) => {
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });
    console.log("user정보 요청");
    return HttpResponse.json({
      id: 32,
      name: "John Doe",
      email: "user@example.com",
      farvoriteList: [123, 333, 555],
      created_at: "2024-01-12T02:48:55.040Z",
    });
  }),
  http.get("/users/:id/favorite", async ({ request }) => {
    // return HttpResponse.json({
    //   favoriteLists: [1, 3, 5],
    // });

    // Access Token 만료시 401 Error
    return HttpResponse.text(JSON.stringify("invalid token"), {
      status: 401,
    });
  }),
  // Test용 - 토큰 재발급 후 재요청 시 정상 응답
  http.get("/users/:id/favorite/retry", async ({ request }) => {
    return HttpResponse.json({
      favoriteLists: [1, 3, 5, 6],
    });
  }),
  http.patch("/users/:id", async ({ request }) => {
    // 유저 위시리스트 데이터 변경 (추가, 삭제) 로직
  }),
];
