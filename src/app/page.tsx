"use client";

import Image from "next/image";

import Global from "@/assets/img/global.svg";
import Tokens from "@/assets/img/tokens.png";
import XList from "@/assets/img/xList.svg";

const App = () => {
  return (
    <div className="content">
      <div className="max-w-[1200px] mx-auto py-[20px]">
        <div className="flex flex-col gap-8">
          <div className="text-[40px] text-[#000] font-bold">
            Slogan Sogeeeee
          </div>
          <div className="text-[40px] text-[#000] font-bold">
            who we are, what we do
          </div>
          <div className="bg-white border border-solid hover:border-black border-transparent w-full h-[194px] rounded-[24px] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src={Tokens} width={64} height={64} alt={""}></Image>
                <div className="flex items-center gap-2">
                  <span className="text-[32px] font-[600]">Superdog token</span>
                  <Global />
                  <XList />
                </div>
              </div>
              <div>
                <div className="text-[12px] text-[#9CA3AF]">Price</div>
                <div className="text-[#11D626] text-[16px] font-[600]">
                  $0.0000000012.5766 （+1243.34%）
                </div>
              </div>
              <div>
                <div className="text-[12px] text-[#9CA3AF]">Launch time</div>
                <div className="text-[#191D26] text-[16px] font-[600]">
                  11/20 2025 30:00
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end mt-[22px]">
              <button className="w-[200px] h-[48px] bg-[#F98FF4] font-[600] text-[16px] border border-solid border-[#000] rounded-[12px]">
                Stake LP
              </button>
            </div>
          </div>
          <div className="bg-white border border-solid hover:border-black border-transparent w-full h-[194px] rounded-[24px] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src={Tokens} width={64} height={64} alt={""}></Image>
                <div className="flex items-center gap-2">
                  <span className="text-[32px] font-[600]">Superdog token</span>
                  <Global />
                  <XList />
                </div>
              </div>
              <div>
                <div className="text-[12px] text-[#9CA3AF]">Price</div>
                <div className="text-[#11D626] text-[16px] font-[600]">
                  $0.0000000012.5766 （+1243.34%）
                </div>
              </div>
              <div>
                <div className="text-[12px] text-[#9CA3AF]">Launch time</div>
                <div className="text-[#191D26] text-[16px] font-[600]">
                  11/20 2025 30:00
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end mt-[22px]">
              <button className="w-[200px] h-[48px] bg-[#F98FF4] font-[600] text-[16px] border border-solid border-[#000] rounded-[12px]">
                Stake LP
              </button>
            </div>
          </div>
          <div className="bg-white border border-solid hover:border-black border-transparent w-full h-[194px] rounded-[24px] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src={Tokens} width={64} height={64} alt={""}></Image>
                <div className="flex items-center gap-2">
                  <span className="text-[32px] font-[600]">Superdog token</span>
                  <Global />
                  <XList />
                </div>
              </div>
              <div>
                <div className="text-[12px] text-[#9CA3AF]">Price</div>
                <div className="text-[#11D626] text-[16px] font-[600]">
                  $0.0000000012.5766 （+1243.34%）
                </div>
              </div>
              <div>
                <div className="text-[12px] text-[#9CA3AF]">Launch time</div>
                <div className="text-[#191D26] text-[16px] font-[600]">
                  11/20 2025 30:00
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end mt-[22px]">
              <button className="w-[200px] h-[48px] bg-[#F98FF4] font-[600] text-[16px] border border-solid border-[#000] rounded-[12px]">
                Stake LP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
