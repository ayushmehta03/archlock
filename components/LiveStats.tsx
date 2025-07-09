"use client"
import CountUp from 'react-countup';
import { FileIcon, ClockIcon, ShieldOffIcon } from 'lucide-react';

export function LiveStats() {
  const stats = [
    {
      icon: <FileIcon className="text-blue-600 h-6 w-6" />,
      label: 'Files Shared',
      count: 231,
    },
    {
      icon: <ClockIcon className="text-yellow-500 h-6 w-6" />,
      label: 'Time-Locked Links',
      count: 120,
    },
    {
      icon: <ShieldOffIcon className="text-red-500 h-6 w-6" />,
      label: 'Access Attempts Blocked',
      count: 8,
    },
  ];

  return (
    <section className="mt-12 flex flex-col items-center">
  <h2 className="text-xl font-bold text-blue-800 dark:text-blue-400 text-center mb-6">
    📊 Live ArchLock Stats
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full px-4">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-4 p-4"
      >
        {stat.icon}
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">
            <CountUp end={stat.count} duration={4} suffix="+" />
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-200">{stat.label}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
