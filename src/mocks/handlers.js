import { http, HttpResponse } from "msw";

export const handlers = [
  // credentials
  http.post("/auth/token", () => {
    console.log("로그인 -> access token 생성");
    return HttpResponse.json(
      {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        token_type: "Bearer",
        expires_in: 3600,
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      },
    );
  }),
  http.post("/auth/refresh", () => {
    console.log("로그인 -> refresh token 실행");
    return HttpResponse.json({
      access_token: "updated_token",
      refresh_token: "updated_token",
      token_type: "Bearer",
      expires_in: 3600,
    });
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
  http.post("/users/me", async ({ request }) => {
    console.log("특정정보 유저확인");
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });
    return HttpResponse.json({
      id: 0,
      name: "John Doe",
      email: "user@example.com",
      created_at: "2024-01-12T02:48:55.040Z",
    });
  }),
  http.post('/api/post/image', (req, res, ctx) => {
    const { file } = req.body;
    // 여기서는 간단히 모의 URL을 반환하고 있습니다.
    const mockS3Url = 'https://example-s3-bucket.com';
    const mockFields = { key: 'mock-key' }; // 모의 필드

    return res(
        ctx.json({
          url: mockS3Url, // 모의 S3 URL
          fields: mockFields // 모의 필드
        })
    );
  }),

];
