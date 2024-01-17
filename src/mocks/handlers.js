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
    return HttpResponse.json({
      propertyName: "Lovely Apartment",
      category: "Beach",
      photos: [
        "https://wherebnb-review-photos.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%86%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8.jpeg",
        "https://wherebnb-review-photos.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%86%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8.jpeg",
        "https://wherebnb-review-photos.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%86%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8.jpeg",
        "https://wherebnb-review-photos.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%86%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8.jpeg",
      ],
      propertyType: "호텔",
      propertyDetail: {
        maxPeople: 4,
        selfCheckIn: true,
        petAvailable: false,
        smokeAvailable: false,
        checkInTime: 14,
        checkOutTime: 11,
        bedroom: 2,
        bed: 3,
        bathroom: 1,
      },
      propertyExplanation:
        "lorem ipsum dolor sit amet, consectetur adip ex ante et just  labor incid temporlorem ipsum dolor sit amet, consectetur adip ex ante et just  labor incid temporlorem ipsum dolor sit amet, consectetur adip ex ante et just  labor incid temporlorem ipsum dolor sit amet, consectetur adip ex ante et just  labor incid temporlorem ipsum dolor sit amet, consectetur adip ex ante et just  labor incid temporlorem ipsum dolor sit amet, consectetur adip ex ante et just  labor incid tempor ",
      price: 100, // 평일, 주말 상관없이 가격 고정
      amenities: ["WiFi", "TV", "Air Conditioning"],
      guestFavorite: true, // 게스트 선호
      scores: {
        totalScore: 3.8, // 총 평점 -> 밑의 스코어들의 합 / 6
        checkInScore: 3.7,
        communicationScore: 3.0,
        cleanScore: 3.7,
        priceScore: 4.3,
        accuracyScore: 4.0,
        locationScore: 4.0,
      },
      reviews: [
        {
          id: 1,
          photo: "profilePic.jpg",
          userName: "홍길동",
          nation: "대한민국",
          totalScore: 4.2, // 6개의 평가를 하지만 총 평점만 제공
          writeDate: "2024-01-17",
          content:
            "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
        },
        {
          id: 2,
          photo: "profilePic.jpg",
          userName: "홍길동",
          nation: "대한민국",
          totalScore: 3.3,
          writeDate: "2024-01-17",
          content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
        },
        {
          id: 3,
          photo: "profilePic.jpg",
          userName: "홍길동",
          nation: "대한민국",
          totalScore: 3.8,
          writeDate: "2024-01-17",
          content: "완벽한 숙소! 모든 것이 기대 이상이었습니다.",
        },
        {
          id: 4,
          photo: "profilePic.jpg",
          userName: "홍길동",
          nation: "대한민국",
          totalScore: 4.2, // 6개의 평가를 하지만 총 평점만 제공
          writeDate: "2024-01-17",
          content:
            "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
        },
        {
          id: 5,
          photo: "profilePic.jpg",
          userName: "홍길동",
          nation: "대한민국",
          totalScore: 3.3,
          writeDate: "2024-01-17",
          content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
        },
        {
          id: 6,
          photo: "profilePic.jpg",
          userName: "홍길동",
          nation: "대한민국",
          totalScore: 3.8,
          writeDate: "2024-01-17",
          content: "완벽한 숙소! 모든 것이 기대 이상이었습니다.",
        },
      ],
      bookings: [
        // 오늘 날짜 이후로 이 property의 모든 예약을 보여줌 (예약실패 한 건은 뜨지 않음)
        {
          checkInDate: "2024-02-21",
          checkOutDate: "2024-02-24",
        },
        {
          checkInDate: "2024-02-25",
          checkOutDate: "2024-02-27",
        },
        {
          checkInDate: "2024-02-02",
          checkOutDate: "2024-02-10",
        },
      ],
      address: {
        country: "대한민국",
        state: "용산구",
        city: "서울특별시",
        street: "Street",
        details: "Apartment 101",
        zipcode: "123456",
        latitude: 27.672932021393862,
        longitude: 85.31184012689732,
      },
      host: {
        hostPhoto: "profilePic.jpg",
        hostName: "John Doe",
        hostExplanation: "안녕 나는 조 도",
        hostCareer: "0 years, 0 months, 0 days",
      },
    });
  }),
];
