import { prisma } from "@/lib/db";

export default async function SecurityAlerts() {
  const alerts = await prisma.securityAlert.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-red-600 text-2xl text-center mb-8">Security Alerts</h1>

      {alerts.length === 0 ? (
        <p className="text-xl text-blue-500 text-center">No security alerts found</p>
      ) : (
        <div className="grid gap-6">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="border p-4 rounded-lg shadow bg-white dark:bg-gray-800"
            >
              <p><span className="font-semibold">Email:</span> {alert.mail}</p>
              <p><span className="font-semibold">Access Key:</span> {alert.accessKey}</p>
              <p><span className="font-semibold">Reason:</span> {alert.reason}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(alert.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
