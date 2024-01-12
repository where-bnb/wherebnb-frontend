"use server";
export async function createUser(formData) {
  // formData 기반으로 validation check
  try {
    // 의도적으로 로딩상태 구현(제거예정)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    const data = await response.json();
    return {
      status: response.status,
      data: data,
    };
  } catch (err) {
    console.error(err);
    return {
      status: "error",
    };
  }
}
