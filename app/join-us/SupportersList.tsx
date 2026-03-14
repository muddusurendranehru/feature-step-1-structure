"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/Card";

type Supporter = {
  id: string;
  interest: string;
  role: string;
  created_at: string;
};

export function SupportersList() {
  const [list, setList] = useState<Supporter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/volunteers")
      .then((r) => r.json())
      .then((data) => (Array.isArray(data) ? setList(data) : []))
      .catch(() => setList([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading || list.length === 0) return null;

  return (
    <>
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Our supporters
      </h2>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => (
          <Card key={s.id}>
            <p className="font-medium text-primary">{s.interest}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{s.role}</p>
            <p className="mt-1 text-xs text-gray-500">
              Joined {new Date(s.created_at).toLocaleDateString()}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
