import axios from "axios";

export async function getRoomById(params) {
  try {
    const { roomId } = params;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/rooms/${roomId}`,
    );
    if (response.status === 200) {
      if (!response.data) {
        throw new Error("응답 데이터가 없습니다.");
      }
      return response.data;
    } else if (response.status === 404) {
      throw new Error("방을 찾을 수 없습니다.");
    } else {
      throw new Error("서버 오류가 발생했습니다.");
    }
  } catch (err) {
    if (err.response) {
      console.error("Error response", err.response);
      throw new Error(
        err.response.data.message || "방 정보를 가져오는데 실패하였습니다.",
      );
    } else {
      console.error("Error", err.message);
      throw err;
    }
  }
}
