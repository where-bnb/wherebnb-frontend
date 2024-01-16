import axios from "axios";

export async function getRoomById(params) {
  try {
    const { roomId } = params;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/rooms/${roomId}`,
    );
    if (!response.data) {
      return null;
    }
    return response.data;
  } catch (err) {
    throw new Error("방 정보를 가져오는데 실패하였습니다.");
  }
}
