import { prisma } from "@/lib/db";
import { SecurityAlert } from "@/lib/generated/prisma";
import { formatIST } from "@/lib/utils";
export const dynamic = "force-dynamic";

export default async function SecurityAlerts() {
  const alerts: SecurityAlert[] = await prisma.securityAlert.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h1 className="text-red-600 text-2xl sm:text-3xl text-center font-bold mb-8">
        🚨 Security Alerts
      </h1>

      {alerts.length === 0 ? (
        <p className="text-lg sm:text-xl text-blue-500 text-center">
          No security alerts found
        </p>
      ) : (
        <div className="grid gap-6">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="border border-gray-300 dark:border-gray-700 p-4 sm:p-6 rounded-2xl shadow-sm bg-white dark:bg-gray-900 transition-all"
            >
              <div className="flex flex-col gap-2 text-sm sm:text-base">
                <p>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">📧 Email:</span>{" "}
                  <span className="text-gray-800 dark:text-gray-100">{alert.mail}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">🔑 Access Key:</span>{" "}
                  <span className="text-gray-800 dark:text-gray-100">{alert.accessKey}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">🛑 Reason:</span>{" "}
                  <span className="text-gray-800 dark:text-gray-100">{alert.reason}</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {formatIST(alert.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
