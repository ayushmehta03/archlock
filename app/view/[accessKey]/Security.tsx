'use client';
import { useEffect, useRef, useState } from "react";

export default function Security({ accessKey }: { accessKey: string }) {
  const expiredRef = useRef(false); // to prevent multiple API calls
  const [expiredReason, setExpiredReason] = useState("");

  const expireLink = async (reason: string) => {
    if (expiredRef.current) return; // already expired
    expiredRef.current = true;
    setExpiredReason(reason);

    try {
      await fetch(`/api/expire/${accessKey}`, { method: "POST" });
    } catch (err) {
      console.error("Failed to expire link:", err);
    }
  };

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        expireLink("Link expired due to tab switch or focus loss.");
      }
    };

    const preventRightClick = (e: MouseEvent) => {
      e.preventDefault();
      expireLink("Link expired due to right-click attempt.");
    };

   const preventKey = (e: KeyboardEvent) => {
  const key = e.key.toLowerCase();
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

  const isDangerousCombo =
    (e.ctrlKey || e.metaKey) && ["u", "s", "c", "i", "j"].includes(key);
  const isF12 = key === "f12";

  if (isDangerousCombo || isF12) {
    e.preventDefault();
    expireLink("Link expired due to devtools or shortcut attempt.");
  }
};


    document.addEventListener("visibilitychange", handleVisibility);
    document.addEventListener("contextmenu", preventRightClick);
    document.addEventListener("keydown", preventKey);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      document.removeEventListener("contextmenu", preventRightClick);
      document.removeEventListener("keydown", preventKey);
    };
  }, [accessKey]);

  if (expiredRef.current) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center text-center px-4 z-50">
        <div>
          <h1 className="text-xl font-semibold">🔒 {expiredReason}</h1>
          <p className="text-sm mt-2">This link is no longer accessible.</p>
        </div>
      </div>
    );
  }

  return null;
}
