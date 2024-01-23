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
      },
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
      },
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
  // 숙소 예약
  http.post("/rooms/booking/:propertyId", async ({ request, params }) => {
    const propertyId = params.propertyId; // URL 경로에서 propertyId 추출
    const body = await request.json(); // 요청 본문을 JSON으로 파싱

    // 이제 propertyId와 body 데이터를 사용할 수 있음
    console.log(propertyId, body);
    return HttpResponse.json({});
  }),
  // 숙소상세 정보
  http.get("/rooms/:roomId", ({ request, params }) => {
    const { roomId } = params;
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 401,
    // });
    return HttpResponse.json({
      propertyName: "Lovely Apartment",
      category: "Beach",
      photos: [
        "https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/burger.jpg",
        "https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/burger.jpg",
        "https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/burger.jpg",
        "https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/burger.jpg",
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
            "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
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
  // 댓글정보
  http.get("/rooms/:roomId/reviews", ({ request, params }) => {
    const { roomId } = params;
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 0;

    if (page === 0) {
      return HttpResponse.json({
        content: [
          {
            reviewId: 6,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.8,
            writeDate: "2024-01-22",
            content: "첫번째 chunk 댓글 모음입니다!",
          },
          {
            reviewId: 5,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.3,
            writeDate: "2024-01-22",
            content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
          },
          {
            reviewId: 4,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 4.2,
            writeDate: "2024-01-22",
            content:
              "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
          },
          {
            reviewId: 3,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.8,
            writeDate: "2024-01-22",
            content: "완벽한 숙소! 모든 것이 기대 이상이었습니다.",
          },
          {
            reviewId: 2,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.3,
            writeDate: "2024-01-22",
            content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
          },
          {
            reviewId: 1,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 4.2,
            writeDate: "2024-01-22",
            content:
              "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
          },
        ],
        pageable: {
          pageNumber: 1,
          pageSize: 6,
          sort: {
            empty: false,
            unsorted: false,
            sorted: true,
          },
          offset: 6,
          paged: true,
          unpaged: false,
        },
        first: false,
        last: false,
        size: 6,
        number: 1,
        sort: {
          empty: false,
          unsorted: false,
          sorted: true,
        },
        numberOfElements: 6,
        empty: false,
      });
    } else if (page === 1) {
      return HttpResponse.json({
        content: [
          {
            reviewId: 12,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.8,
            writeDate: "2024-01-22",
            content: "두번째 chunk 댓글 모음입니다!",
          },
          {
            reviewId: 11,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.3,
            writeDate: "2024-01-22",
            content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
          },
          {
            reviewId: 10,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 4.2,
            writeDate: "2024-01-22",
            content:
              "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
          },
          {
            reviewId: 9,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.8,
            writeDate: "2024-01-22",
            content: "완벽한 숙소! 모든 것이 기대 이상이었습니다.",
          },
          {
            reviewId: 8,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.3,
            writeDate: "2024-01-22",
            content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
          },
          {
            reviewId: 7,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 4.2,
            writeDate: "2024-01-22",
            content:
              "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
          },
        ],
        pageable: {
          pageNumber: 1,
          pageSize: 6,
          sort: {
            empty: false,
            unsorted: false,
            sorted: true,
          },
          offset: 6,
          paged: true,
          unpaged: false,
        },
        first: false,
        last: false,
        size: 6,
        number: 1,
        sort: {
          empty: false,
          unsorted: false,
          sorted: true,
        },
        numberOfElements: 6,
        empty: false,
      });
    } else if (page === 2) {
      return HttpResponse.json({
        content: [
          {
            reviewId: 18,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.8,
            writeDate: "2024-01-22",
            content: "마지막 chunk 댓글 모음입니다!",
          },
          {
            reviewId: 17,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.3,
            writeDate: "2024-01-22",
            content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
          },
          {
            reviewId: 16,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 4.2,
            writeDate: "2024-01-22",
            content:
              "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
          },
          {
            reviewId: 15,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.8,
            writeDate: "2024-01-22",
            content: "완벽한 숙소! 모든 것이 기대 이상이었습니다.",
          },
          {
            reviewId: 14,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 3.3,
            writeDate: "2024-01-22",
            content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
          },
          {
            reviewId: 13,
            photo: "profilePic.jpg",
            userName: "홍길동",
            nation: "대한민국",
            totalScore: 4.2,
            writeDate: "2024-01-22",
            content:
              "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
          },
        ],
        pageable: {
          pageNumber: 1,
          pageSize: 6,
          sort: {
            empty: false,
            unsorted: false,
            sorted: true,
          },
          offset: 6,
          paged: true,
          unpaged: false,
        },
        first: false,
        last: true,
        size: 6,
        number: 1,
        sort: {
          empty: false,
          unsorted: false,
          sorted: true,
        },
        numberOfElements: 6,
        empty: false,
      });
    }

    return HttpResponse.json({});
  }),
];

const reviews = [
  {
    id: 1,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 4.2, // 6개의 평가를 하지만 총 평점만 제공
    writeDate: "2024-01-17",
    content: "정말 깨끗하고 아늑한 숙소였습니다. ",
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
    content: "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
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
  {
    id: 7,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 4.2, // 6개의 평가를 하지만 총 평점만 제공
    writeDate: "2024-01-17",
    content: "정말 깨끗하고 아늑한 숙소였습니다. ",
  },
  {
    id: 8,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 3.3,
    writeDate: "2024-01-17",
    content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
  },
  {
    id: 9,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 3.8,
    writeDate: "2024-01-17",
    content: "완벽한 숙소! 모든 것이 기대 이상이었습니다.",
  },
  {
    id: 10,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 4.2, // 6개의 평가를 하지만 총 평점만 제공
    writeDate: "2024-01-17",
    content: "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
  },
  {
    id: 11,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 3.3,
    writeDate: "2024-01-17",
    content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
  },
  {
    id: 12,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 3.8,
    writeDate: "2024-01-17",
    content: "완벽한 숙소! 모든 것이 기대 이상이었습니다.",
  },
  {
    id: 13,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 4.2, // 6개의 평가를 하지만 총 평점만 제공
    writeDate: "2024-01-17",
    content: "정말 깨끗하고 아늑한 숙소였습니다. ",
  },
  {
    id: 14,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 3.3,
    writeDate: "2024-01-17",
    content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
  },
  {
    id: 15,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 3.8,
    writeDate: "2024-01-17",
    content: "완벽한 숙소! 모든 것이 기대 이상이었습니다.",
  },
  {
    id: 16,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 4.2, // 6개의 평가를 하지만 총 평점만 제공
    writeDate: "2024-01-17",
    content: "정말 깨끗하고 아늑한 숙소였습니다. 호스트의 친절함도 좋았어요.",
  },
  {
    id: 17,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 3.3,
    writeDate: "2024-01-17",
    content: "위치가 매우 좋았지만, 체크인 과정이 조금 복잡했어요.",
  },
  {
    id: 18,
    photo: "profilePic.jpg",
    userName: "홍길동",
    nation: "대한민국",
    totalScore: 3.8,
    writeDate: "2024-01-17",
    content: "완벽한 숙소! 모든 것이 기대 이상이었습니다.",
  },
];
