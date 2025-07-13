import { CameraIcon, Clock, MailIcon, Map } from "lucide-react";

export default function Features() {
  return (
    <section className="mt-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">
        Powerful ArchLock Features
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            icon: <Map className="text-indigo-600" size={32} />,
            title: "Secure Map Sharing",
            description: "One-time access links that auto-expire after use.",
          },
          {
            icon: <CameraIcon className="text-red-500" size={32} />,
            title: "Camera Detection",
            description: "Detect screen capture attempts using webcam AI.",
          },
          {
            icon: <Clock className="text-yellow-500" size={32} />,
            title: "Link Expiry Control",
            description: "Set expiration time or usage limits for access links.",
          },
          {
            icon: <MailIcon className="text-sky-600" size={32} />,
            title: "Email Notifications",
            description: "Get instant alerts when someone opens your shared file.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 justify-center w-full sm:w-[48%] lg:w-[22%] h-60 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl items-center shadow-md hover:scale-105 transition-transform bg-white dark:bg-gray-900"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-gray-100">
              {feature.title}
            </h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
