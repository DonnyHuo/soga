"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import ArrowLeft from "@/assets/img/ArrowLeft.svg";
import ArrowRight from "@/assets/img/ArrowRight.svg";
import Tokens from "@/assets/img/tokens.png";

const Portfolio = () => {
  const router = useRouter();
  return (
    <div className="content">
      <div className="max-w-[1200px] mx-auto py-[20px]">
        <div className="text-[40px] text-[#191D26] font-bold">My Portfolio</div>
        <div className="bg-white rounded-[26px] overflow-hidden mt-8">
          <Table className="[&_tr]:border-b-0 [&_thead]:border-b  [&_thead]:border-black [&_thead]:py-4 [&_thead]:h-12 [&_th]:px-8 [&_td]:px-8 [&_tr]:py-5">
            <TableCaption className="border-t-1 mt-0 py-4 text-black text-[12px] font-[500]">
              <div className="w-full flex items-center justify-center gap-2 cursor-pointer">
                <ArrowLeft />
                Page 1 of 6
                <ArrowRight />
              </div>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">token name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead className="text-right">Way to interact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="[&_tr]:mx-[20px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((list) => {
                return (
                  <TableRow key={list}>
                    <TableCell className="font-medium !h-8 py-5" width={400}>
                      <div className="flex items-center gap-2">
                        <Image
                          src={Tokens}
                          width={24}
                          height={24}
                          alt={""}
                        ></Image>
                        <span className="text-[16px] font-[500]">
                          Superdog token
                        </span>
                        <span className="bg-[#11D626] rounded-[6px] text-[12px] text-white px-1 py-[2px]">
                          11.01%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell width={200} className="font-[500]">
                      $0.0{8}1257{" "}
                    </TableCell>
                    <TableCell width={200} className="font-[500]">
                      840000000.23
                    </TableCell>
                    <TableCell className="flex items-center justify-end gap-2">
                      <Button
                        className="rounded-2xl bg-[#F98FF4] text-[12px] text-[#12131A] hover:bg-[#F98FF4] hover:border-black border border-solid"
                        size={"sm"}
                      >
                        <span className=" font-[500]">Swap</span>
                      </Button>
                      <Button
                        className="rounded-2xl bg-[#F98FF4] text-[12px] text-[#12131A] hover:bg-[#F98FF4] hover:border-black border border-solid"
                        size={"sm"}
                        onClick={() => router.push("/bridge")}
                      >
                        <span className=" font-[500]">Bridge</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
