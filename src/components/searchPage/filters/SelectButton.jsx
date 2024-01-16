const SelectButton = ({ icon: Icon, title, subtitle, big }) => {
  if (big) {
    return (
      <button className="flex flex-col w-[350px] h-[150px] gap-2 p-6 border-[1px] border-neutral-200 rounded-xl hover:border-black">
        <Icon size={40} />
        <div className="font-medium">{title}</div>
        {subtitle && (
          <div className="text-sm font-light text-neutral-700">{subtitle}</div>
        )}
      </button>
    );
  } else {
    return (
      <button className="flex flex-col justify-between w-full h-[125px] gap-2 p-4 border-[1px] border-neutral-200 rounded-xl hover:border-black">
        <Icon size={30} />
        <div className="font-medium text-left">{title}</div>
        {subtitle && (
          <div className="text-sm font-light text-neutral-500">{subtitle}</div>
        )}
      </button>
    );
  }
};

export default SelectButton;
