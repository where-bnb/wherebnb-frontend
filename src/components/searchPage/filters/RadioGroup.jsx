const RadioGroup = ({ children }) => {
  return (
    <fieldset className="flex flex-row w-full justify-between 2xl:justify-start 2xl:gap-4 mb-3">
      {children}
    </fieldset>
  );
};

export default RadioGroup;
