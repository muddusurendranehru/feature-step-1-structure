"use client";

import { useState } from "react";
import { Card } from "./Card";

export function RevenueShareCalculator() {
  const [revenue, setRevenue] = useState("");
  const sharePercent = 30;
  const result =
    revenue !== "" && !Number.isNaN(Number(revenue))
      ? ((Number(revenue) * sharePercent) / 100).toFixed(0)
      : null;

  return (
    <Card>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Revenue-share calculator
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        Example: {sharePercent}% share of monthly clinic revenue.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Monthly revenue (₹)
          </span>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            placeholder="e.g. 500000"
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </label>
        <div className="flex items-center gap-2 sm:pb-0.5">
          <span className="text-gray-600 dark:text-gray-400">→</span>
          <span className="font-semibold text-primary">
            {result != null ? `₹${result} share` : "—"}
          </span>
        </div>
      </div>
      <div className="mt-6">
        <a
          href="/documents/loi-placeholder.pdf"
          download
          className="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 font-medium text-white shadow-sm hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-5 sm:py-3"
        >
          Download LOI
        </a>
      </div>
    </Card>
  );
}
