import { http, HttpResponse } from "msw";

export const handlers = [
  // credentials
  http.post("/auth/token", () => {
    console.log("로그인 -> access token 생성");
    return HttpResponse.json(
      {
        user: {
          createDate: "2024-01-12T02:48:55.040Z",
          lastModifiedDate: "2024-01-12T02:48:55.040Z",
          userId: 1,
          name: "John Doe",
          picture: "",
          role: "USER",
          email: "user@example.com",
          password:
            "$2a$10$/FzEaOhkzGSMxXgFiSzUlewyh6EcG/LM3an0MSWCnZKGBojLFc4B.",
          phoneNumber: 1234567890,
          refreshToken:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDYyMzYxODV9.V8wWhm1uKjGt2Bso-x-Ttn6MImtk7xmP0nGUqoptck0",
          provider: null,
          providerId: null,
          address: {
            country: "Country",
            state: "State",
            city: "City",
            street: "Street",
            details: "Details",
            zipcode: "Zipcode",
            latitude: 10.0,
            longitude: 20.0,
          },
          wishList: [1, 3, 4],
        },
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        },
      }
    );
  }),
  http.post("/auth/refresh", () => {
    console.log("로그인 -> refresh token 실행");
    return HttpResponse.json(
      {
        NewAccessToken:
          "Bearer refreshed!!!-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
          NewAccessToken:
            "Bearer refreshed!!!-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
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
