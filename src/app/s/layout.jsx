const SearchResultLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="md:pt-[260px] pt-[180px]">{children}</div>
    </div>
  );
};
