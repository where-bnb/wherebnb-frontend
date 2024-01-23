export default function Input({ placeholder, value, onChange, isCheckInOut = false }) {

    const handleChange = (e) => {
        const val = e.target.value;

        // 입력값이 숫자이고 0과 23 사이인 경우에만 onChange 호출
        if (!isNaN(val) && val >= 0 && val <= 23) {
            onChange(e);
        } else {
            alert("0~23 사이의 숫자를 입력해주세요.");
        }
    };


    return (
        <div>
            <input
                className="p-10 text-2xl mt-10 w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                placeholder={placeholder}
                value={value}
                onChange={isCheckInOut ? handleChange : onChange}
                {...(isCheckInOut ? { min: "0", max: "23" } : {})}
            />
        </div>
    );
}