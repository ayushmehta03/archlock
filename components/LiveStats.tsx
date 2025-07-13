"use client";
import CountUp from "react-countup";
import { FileIcon, ClockIcon, ShieldOffIcon } from "lucide-react";

export function LiveStats() {
  const stats = [
    {
      icon: <FileIcon className="text-blue-600 h-7 w-7" />,
      label: "Files Shared",
      count: 231,
    },
    {
      icon: <ClockIcon className="text-yellow-500 h-7 w-7" />,
      label: "Time-Locked Links",
      count: 120,
    },
    {
      icon: <ShieldOffIcon className="text-red-500 h-7 w-7" />,
      label: "Access Attempts Blocked",
      count: 8,
    },
  ];

  return (
    <section className="mt-12 px-4">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-800 dark:text-blue-400 text-center mb-8">
        📊 Live ArchLock Stats
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm"
          >
            <div>{stat.icon}</div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                <CountUp end={stat.count} duration={2} suffix="+" />
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
