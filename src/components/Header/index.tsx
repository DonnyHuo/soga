"use client";
import {
  useConnectModal,
  useAccountModal,
  useChainModal
} from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccount, useChains } from "wagmi";

import { shortAddress } from "@/utils";
import SogeLogo from "@/assets/img/sogeLogo.svg";

import { Button } from "../ui/button";

const Header = () => {
  const pathname = usePathname();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { isConnected, address, chain } = useAccount();

  const chains = useChains();

  const { openChainModal } = useChainModal();

  console.log("chain", chain, chains);

  return (
    <div className="bg-[#51D8CB] relative">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto py-[20px]">
        <Link href="/">
          <SogeLogo />
        </Link>

        <div className="bg-[rgba(255,255,255,0.50)] w-[282px] h-[64px] flex items-center justify-around rounded-[999px] text-[16px] font-[600] absolute left-1/2 -translate-x-1/2">
          <Link
            className={pathname === "/" ? "text-[#F98FF4]" : "text-[#191D26]"}
            href="/"
          >
            Launchpad
          </Link>
          <Link
            className={
              pathname === "/portfolio" ? "text-[#F98FF4]" : "text-[#191D26]"
            }
            href="/portfolio"
          >
            Portfolio
          </Link>
        </div>
        {isConnected ? (
          <div>
            <Button
              className="bg-white border border-solid border-black text-black rounded-[999px] px-6 py-[10px] h-[56px] hover:bg-[#f5f5f5]"
              onClick={openChainModal}
            >
              {chain?.name}
            </Button>
            <Button
              className="bg-white border border-solid border-black text-black rounded-[999px] px-6 py-[10px] h-[56px] hover:bg-[#f5f5f5]"
              onClick={openAccountModal}
            >
              {shortAddress(address)}
            </Button>
          </div>
        ) : (
          <Button
            className="bg-white border border-solid border-black text-black rounded-[999px] px-6 py-[10px] h-[56px] hover:bg-[#f5f5f5]"
            onClick={openConnectModal}
          >
            Connect Button
          </Button>
        )}

        {/* <ConnectButton /> */}
      </div>
    </div>
  );
};
export default Header;
