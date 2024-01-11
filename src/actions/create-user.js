"use server";
export async function createUser(formData) {
  // formData 기반으로 validation check
  try {
    // 의도적으로 로딩상태 구현(제거예정)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      },
    );
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
