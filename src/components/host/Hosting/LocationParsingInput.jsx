const LocationParsingInput = ({ value, placeholder }) => (
    <input
        className="p-10 text-2xl mt-10 w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        type="text"
        value={value}
        placeholder={placeholder}
        readOnly
    />
);

export default LocationParsingInput;