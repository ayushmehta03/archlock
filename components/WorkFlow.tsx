import { Bell, Link2, UploadCloud, Verified } from "lucide-react";

export default function WorkFlow() {
  const steps = [
    {
      icon: <UploadCloud className="text-blue-500" size={32} />,
      title: "Upload Your Map",
      description: "Engineer uploads a project map securely via dashboard.",
    },
    {
      icon: <Link2 className="text-emerald-500" size={32} />,
      title: "Generate Secure Link",
      description: "A one-time use link is created and emailed to the client.",
    },
    {
      icon: <Verified className="text-green-600" size={32} />,
      title: "Client Verifies Access",
      description: "Client opens the link and allows camera access to proceed.",
    },
    {
      icon: <Bell className="text-orange-500" size={32} />,
      title: "Auto Expiry & Notifications",
      description: "Once viewed, the link expires and a notification is sent.",
    },
  ];

  return (
    <section className="mt-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">
        ArchLock Workflow
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] p-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl items-center shadow-md transition-transform hover:scale-105 bg-white dark:bg-gray-900"
          >
            {step.icon}
            <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-gray-100">
              {step.title}
            </h3>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
