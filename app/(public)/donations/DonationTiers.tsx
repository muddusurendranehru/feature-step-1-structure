"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

const fixedTiers = [
  { amount: 500, label: "Supporter" },
  { amount: 1000, label: "Friend" },
  { amount: 5000, label: "Partner" },
];

export function DonationTiers() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  // Show amount on screen: from clicked tier OR from manual custom input (both paths supported)
  const customNum =
    customAmount.trim() !== "" ? Number(customAmount) : NaN;
  const isValidCustom = !Number.isNaN(customNum) && customNum > 0;
  const displayAmount =
    selectedAmount !== null
      ? selectedAmount
      : isValidCustom
        ? Math.floor(customNum)
        : null;

  return (
    <>
      <div className="grid gap-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {fixedTiers.map((tier) => (
          <button
            key={tier.amount}
            type="button"
            onClick={() => {
              setSelectedAmount(tier.amount);
              setCustomAmount("");
            }}
            className="cursor-pointer text-left transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Card
              className={`text-center transition-shadow ${
                selectedAmount === tier.amount
                  ? "ring-2 ring-primary shadow-lg"
                  : ""
              }`}
            >
              <p className="text-2xl font-bold text-primary">
                ₹{tier.amount.toLocaleString("en-IN")}
              </p>
              <p className="mt-1 text-gray-600 dark:text-gray-300">
                {tier.label}
              </p>
            </Card>
          </button>
        ))}

        <Card className="flex flex-col justify-center text-center">
          <p className="text-2xl font-bold text-primary">Custom</p>
          <p className="mt-1 text-gray-600 dark:text-gray-300">Your choice</p>
          <label className="mt-4 flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Enter amount (₹)
            </span>
            <input
              type="number"
              min={1}
              step={1}
              placeholder="e.g. 2500"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                if (e.target.value.trim() !== "") setSelectedAmount(null);
              }}
              className="rounded-lg border border-gray-300 px-3 py-2 text-center text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </label>
        </Card>
      </div>

      {(displayAmount !== null && displayAmount > 0) && (
        <p className="rounded-xl bg-primary/10 px-4 py-3 text-center font-medium text-primary" role="status">
          Selected: ₹{displayAmount.toLocaleString("en-IN")} — scan a QR below to pay
        </p>
      )}
    </>
  );
}
