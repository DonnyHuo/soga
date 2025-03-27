"use client";

import Coinmarketcap from "@/assets/img/coinmarketcap.svg";
import Discord from "@/assets/img/discord.svg";
import SogeLogoSM from "@/assets/img/sogeLogoSm.svg";
import Telegram from "@/assets/img/telegram.svg";
import X from "@/assets/img/x.svg";

const Footer = () => {
  return (
    <div className="bg-[#51D8CB]">
      <div className="flex items-start justify-between max-w-[1200px] mx-auto pt-[20px] pb-[100px]">
        <div>
          <SogeLogoSM />
          <div className="text-[14px] text-[#4B5563] w-[282px] mt-3">
            Transparency and integrity are core values in our mission to create
            products that empower individual financial freedom
          </div>
          <div className="text-[#4B5563] text-[14px] mt-[26px] flex items-center gap-10">
            <span>Terms of service</span>
            <span>Privacy Policy</span>
          </div>
          <div className="text-[#4B5563] text-[14px] mt-[15px] font-[500]">
            Copyright Soge Labs Limited 2024 All Right Reserved
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="w-[180px] flex flex-col gap-3">
            <div className="text-[#4B5563] text-[16px]">Product</div>
            <div className="text-[#86868B] text-[14px]">Swap</div>
            <div className="text-[#86868B] text-[14px]">Explore</div>
            <div className="text-[#86868B] text-[14px]">Pool</div>
          </div>
          <div className="w-[180px] flex flex-col gap-3">
            <div className="text-[#4B5563] text-[16px]">Company</div>
            <div className="text-[#86868B] text-[14px]">Introduction</div>
            <div className="text-[#86868B] text-[14px]">Media Kit</div>
            <div className="text-[#86868B] text-[14px]">FAQ</div>
          </div>
          <div className="w-[180px] flex flex-col gap-3">
            <div className="text-[#4B5563] text-[16px]">Support</div>
            <div className="text-[#86868B] text-[14px]">Contact us</div>
          </div>
          <div className="w-[180px] flex flex-col gap-3">
            <div>Community</div>
            <div className="flex items-center gap-4">
              <X />
              <Coinmarketcap />
              <Telegram />
              <Discord />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
