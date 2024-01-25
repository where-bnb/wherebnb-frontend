import Container from "@/components/ui/Container";
import BaseHeader from "@/components/ui/header/BaseHeader";

const BookLayout = ({ children }) => {
  return (
    <>
      <BaseHeader />
      <Container>{children}</Container>
    </>
  );
};

export default BookLayout;
