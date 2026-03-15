"use client";

import { useState, useEffect } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Card } from "@/components/Card";

type Camp = {
  id: string;
  date: string;
  venue: string;
  description: string | null;
  photo_urls: string[];
  created_at: string;
};

type Volunteer = {
  id: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  interest: string | null;
  role: string | null;
  created_at: string;
};

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function handleEditPlaceholder(id: string, type: "camp" | "volunteer") {
  console.log(`Edit placeholder: ${type} ${id}`);
  // Placeholder: no real edit yet
}

function handleDeletePlaceholder(id: string, type: "camp" | "volunteer") {
  console.log(`Delete placeholder: ${type} ${id}`);
  // Placeholder: no real delete yet
}

export default function AdminDashboardPage() {
  const [camps, setCamps] = useState<Camp[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loadingCamps, setLoadingCamps] = useState(true);
  const [loadingVolunteers, setLoadingVolunteers] = useState(true);
  const [errorCamps, setErrorCamps] = useState<string | null>(null);
  const [errorVolunteers, setErrorVolunteers] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/camps")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch camps");
        return r.json();
      })
      .then((data) => (Array.isArray(data) ? setCamps(data) : []))
      .catch(() => setErrorCamps("Could not load camps."))
      .finally(() => setLoadingCamps(false));
  }, []);

  useEffect(() => {
    fetch("/api/volunteers")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch volunteers");
        return r.json();
      })
      .then((data) => (Array.isArray(data) ? setVolunteers(data) : []))
      .catch(() => setErrorVolunteers("Could not load volunteers."))
      .finally(() => setLoadingVolunteers(false));
  }, []);

  return (
    <>
      <SignedOut>
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Sign in to view the dashboard.
          </p>
          <SignInButton mode="modal" forceRedirectUrl="/admin/dashboard">
            <button
              type="button"
              className="rounded-xl bg-primary px-6 py-3 font-medium text-white hover:opacity-90"
            >
              Sign in
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <div className="flex gap-2">
              <Link
                href="/admin/voice-settings"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Voice settings
              </Link>
              <Link
                href="/admin"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Volunteers only
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                ← Home
              </Link>
            </div>
          </div>

          {/* Medical camps */}
          <section className="mb-12">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Medical camps ({camps.length})
            </h2>
            {errorCamps && (
              <p className="mb-2 text-red-600 dark:text-red-400">{errorCamps}</p>
            )}
            {loadingCamps ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="h-4 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="mt-2 h-5 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="mt-2 h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
                  </Card>
                ))}
              </div>
            ) : camps.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No camps yet.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {camps.map((camp) => (
                  <Card key={camp.id} className="flex flex-col">
                    <p className="text-sm font-medium text-primary">
                      {formatDate(camp.date)}
                    </p>
                    <h3 className="mt-1 font-bold text-gray-900 dark:text-white">
                      {camp.venue}
                    </h3>
                    {camp.description && (
                      <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                        {camp.description}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      {Array.isArray(camp.photo_urls)
                        ? camp.photo_urls.length
                        : 0}{" "}
                      photo(s)
                    </p>
                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleEditPlaceholder(camp.id, "camp")}
                        className="rounded border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeletePlaceholder(camp.id, "camp")}
                        className="rounded border border-red-200 px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
                      >
                        Delete
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </section>

          {/* Volunteers & donors */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Volunteers & donors ({volunteers.length})
            </h2>
            {errorVolunteers && (
              <p className="mb-2 text-red-600 dark:text-red-400">
                {errorVolunteers}
              </p>
            )}
            {loadingVolunteers ? (
              <div className="h-48 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-800" />
            ) : (
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                        Phone
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                        Interest
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                        Role
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                        Joined
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                    {volunteers.length === 0 ? (
                      <tr>
                        <td
                          colSpan={6}
                          className="px-4 py-8 text-center text-gray-500 dark:text-gray-400"
                        >
                          No volunteers or donors yet.
                        </td>
                      </tr>
                    ) : (
                      volunteers.map((v) => (
                        <tr
                          key={v.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        >
                          <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900 dark:text-white">
                            {v.name ?? "—"}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                            {v.phone ?? "—"}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                            {v.interest ?? "—"}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                            {v.role ?? "—"}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                            {formatDate(v.created_at)}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-right">
                            <button
                              type="button"
                              onClick={() =>
                                handleEditPlaceholder(v.id, "volunteer")
                              }
                              className="mr-2 rounded border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                handleDeletePlaceholder(v.id, "volunteer")
                              }
                              className="rounded border border-red-200 px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </SignedIn>
    </>
  );
}
