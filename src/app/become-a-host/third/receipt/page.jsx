import {CardComponent} from "@/components/host/RegisterRoom/CardComponent";

export default function ReceiptPage() {
    return (
        <div>
            <h4 className="text-4xl font-bold">숙소 검토하기</h4>
            <h4>게스트에게 표시되는 정보는 다음과 같습니다 모든정보가 정확한지 확인하세요</h4>
        <div className="flex flex-row gap-10">
            <CardComponent/>
            <div className="flex flex-col text-bold text-4xl">
                <h4 className="mb-10">다음 단계</h4>
                <h4 className="mb-10">숙소등록 전 몇가지 세부정보 확인 필요</h4>
                <h4 className="mb-10">설정변경하기</h4>
            </div>
        </div>
        </div>
    )
}