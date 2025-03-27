"use client";

import EmptyStatus from "@/assets/img/emptyStatus.svg";

const NotFound = () => {
  return (
    <div className="content">
      <div className="flex flex-col items-center py-[60px] gap-[150px]">
        <div className="text-[40px] font-bold text-[#000]">
          Soge to the moon
        </div>
        <div className="flex flex-col items-center gap-[57px]">
          <EmptyStatus />
          <div className="text-[32px] text-[#000] font-bold">No data</div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
