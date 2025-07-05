import { CameraIcon, Clock, MailIcon, Map } from "lucide-react";

export default function Features() {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4 px-2">
<div className="flex flex-col gap-2 border-2  justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform   hover:scale-110 ease-in ">
        <Map />
        <h3 className="text-lg font-semibold text-center">Secure Map Sharing</h3>
        <p className="text-center text-sm">One-time access link that auto-expires after use</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform  hover:scale-110 ease-in">
        <CameraIcon />
        <h3 className="text-lg font-semibold text-center">Camera Detection</h3>
        <p className="text-center text-sm">Verify real users with smart device camera access</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform hover:scale-110 ease-in">
        <Clock />
        <h3 className="text-lg font-semibold text-center">Link Expiry Control</h3>
        <p className="text-center text-sm">Set usage limits or expiration time for shared maps</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform   hover:scale-110 ease-in">
        <MailIcon />
        <h3 className="text-lg font-semibold text-center">Email Notifications</h3>
        <p className="text-center text-sm">Receive real-time alerts for map activity</p>
      </div>
    </div>
  );
}
