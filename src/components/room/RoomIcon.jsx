"use client";

import { ICONS } from "@/utils/iconMaker";
import { useMemo } from "react";

const RoomIcon = ({ label }) => {
  const IconComponent = useMemo(() => {
    const iconObject = ICONS.find((iconItem) => iconItem.label === label);
    return iconObject ? iconObject.icon : null;
  }, [label]);

  if (!IconComponent) return null;

  return (
    <div className="flex items-center gap-4">
      <IconComponent size={25} />
      <span>{label}</span>
    </div>
  );
};

export default RoomIcon;
