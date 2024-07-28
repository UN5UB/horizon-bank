"use client";

import React from "react";
import CountUp from "react-countup";
import { formatAmount } from "@/lib/utils";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimal="," prefix="$" decimals={2} end={amount}></CountUp>
    </div>
  );
};

export default AnimatedCounter;
