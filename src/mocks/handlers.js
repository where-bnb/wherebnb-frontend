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
  // 숙소상세 정보
  http.get("/rooms/:roomId", ({ request, params }) => {
    const { roomId } = params;
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 510,
    // });
    return HttpResponse.json([
      {
        id: "65a4da9b8454f6802b4e1192",
        title: "desert",
        description: "hahaha",
        imageSrc:
          "https://res.cloudinary.com/di0docj6z/image/upload/v1705302662/fghsxhueagdrhnvxfcck.jpg",
        createdAt: "2024-01-15T07:11:23.420Z",
        category: "Countryside",
        roomCount: 1,
        bathroomCount: 1,
        guestCount: 4,
        locationValue: "CN",
        userId: "659bb0cfcf6c3bde9250f65d",
        price: 13333,
        user: {
          id: "659bb0cfcf6c3bde9250f65d",
          name: "JunHyeongChae",
          email: "jchae7184@gmail.com",
          emailVerified: null,
          image: "https://avatars.githubusercontent.com/u/78126381?v=4",
          hashedPassword: null,
          createdAt: "2024-01-08T08:22:39.300Z",
          updatedAt: "2024-01-15T09:31:04.306Z",
          favoriteIds: ["65a4da9b8454f6802b4e1192"],
        },
      },
    ]);
  }),
];
