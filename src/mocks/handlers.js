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
  http.post('/become-a-host', async (req, res, ctx) => {
    // FormData 인스턴스를 얻기
    console.log("=>(handlers.js:89) 등록함요");
    const formData = await req.formData();
    const photos = formData.getAll('photos'); // 'photos' 필드의 모든 파일 가져오기
    const otherData = formData.get('data'); // 'data' 필드의 JSON 데이터 가져오기

    // 'data' 필드의 JSON 데이터를 객체로 파싱
    const parsedData = JSON.parse(otherData);

    // 필요한 로직 수행...
    // 예: 파일의 수와 다른 데이터를 확인
    console.log(`업로드된 사진 수: ${photos.length}`);
    console.log(`기타 데이터: `, parsedData);

    // 모의 응답 반환
    return res(
        ctx.status(200),
        ctx.json({ message: '호스팅 등록 성공' })
    );
  }),


];
