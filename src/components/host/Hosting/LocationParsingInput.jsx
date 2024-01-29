const LocationParsingInput = ({ value, placeholder, onChange, isReadOnly= true }) => (
    <input
        className="md:p-5 xl:p-8 xl:text-2xl md:text-xl mt-8 w-full xl:h-7 md:h-5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={isReadOnly}
    />
);

export default LocationParsingInput;