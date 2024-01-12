// pages/hosting.jsx 또는 적절한 경로의 파일

export default function HostingPage() {
  // 페이지 내용
  return (
    <div>
      HostingPage
      {/* Hosting 페이지 컨텐츠 */}
    </div>
  );
}

// HostingPage에 대해 별도의 레이아웃을 적용하지 않음
HostingPage.getLayout = function(page) {
  return <>{page}</>;
}