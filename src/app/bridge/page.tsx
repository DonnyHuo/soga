"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Bsc from "@/assets/img/bsc.svg";
import Close from "@/assets/img/close.svg";
import Exchange from "@/assets/img/exchange.svg";
import History from "@/assets/img/history.svg";
import Left from "@/assets/img/left.svg";
import Soneium from "@/assets/img/soneium.svg";

const Bridge = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="content">
      <div className="max-w-[1200px] mx-auto py-[20px]">
        <div className="w-[664px] mx-auto mt-[76px] ">
          <div className="flex items-center justify-between">
            <div className="text-[40px] font-bold text-black">Bridge</div>
            <div className="bg-white rounded-[8px] p-1 border border-solid hover:border-black">
              <History width={24} height={24} onClick={() => setOpen(true)} />
            </div>
          </div>
          <div className="w-full bg-white rounded-[24px] mt-8 p-[20px]">
            <div className="flex items-center relative gap-1">
              <div className="bg-[#F3F4F6] w-1/2 h-[80px] rounded-[16px]"></div>
              <div className="bg-[#F3F4F6] w-1/2 h-[80px] rounded-[16px]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-1/2 border-[3px] border-solid border-white p-1 rounded-[12px] bg-[#F3F4F6]">
                <Exchange />
              </div>
            </div>
            <div className="bg-[#F3F4F6] w-full h-[80px] rounded-[16px] mt-3"></div>
            <div className="border border-solid border-[#D1D5DB] w-full h-[80px] rounded-[16px] mt-3 px-6 py-4">
              <div className="text-[14px] text-[#6B7280]">Receive address</div>
              <div className="text-[#191D26] text-[20px] font-[600]">
                0x1234456789dfghjklrtyuio234567890
              </div>
            </div>
            <Button className="w-full h-12 mt-6 bg-[#F98FF4] text-[16px] text-[#12131A] font-[600] border border-solid border-black rounded-[12px]">
              Continue
            </Button>
          </div>
        </div>
      </div>

      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerContent className="w-[500px] h-screen">
          <DrawerHeader className="py-0">
            <DrawerTitle className="text-[40px] font-bold flex items-center justify-between border-0 border-b border-solid border-[#E5E7EB] py-[20px]">
              <div>History</div>
              <div
                className="border border-solid border-black rounded-full p-2 hover:bg-[#f5f5f5]"
                onClick={() => setOpen(false)}
              >
                <Close />
              </div>
            </DrawerTitle>
            <div className="pt-6 h-[calc(100vh-120px)] overflow-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((list) => {
                return (
                  <div
                    key={list}
                    className="bg-[#F9FAFB] rounded-[16px] p-6 w-full mb-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[14px]">
                        <Bsc width={12} height={12} />
                        <span>BSC</span>
                        <Left />
                        <Soneium />
                        <span>Soneium</span>
                      </div>
                      <div className="text-[12px]">2025-03-25 10:10:10</div>
                    </div>
                    <div className="text-[20px] font-[600] my-2">
                      2415.23 BNB
                    </div>
                    <div className="text-[14px] text-[#9CA3AF]">
                      0xr32gh34y453y54h345h24g324g45h435
                    </div>
                  </div>
                );
              })}
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Bridge;
