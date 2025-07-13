"use client";

import { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";

export default function SecurityWithObjectDetection({ accessKey }: { accessKey: string }) {
  const expiredRef = useRef(false);
  const [expiredReason, setExpiredReason] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const modelRef = useRef<cocoSsd.ObjectDetection | null>(null);

 const speak=(msg:string)=>{
  const utterance= new SpeechSynthesisUtterance(msg)
  utterance.lang="en-US"
  utterance.pitch=1;
  utterance.rate=1;
  utterance.volume=1
  window.speechSynthesis.speak(utterance)
 }





  const expireLink = async (reason: string) => {
    if (expiredRef.current) return;
    expiredRef.current = true;
    setExpiredReason(reason);
   speak("Warning! Unauthorized activity detected. This session is being terminated.");

    try {
      await fetch(`/api/expire/${accessKey}`, { method: "POST" });
    } catch (err) {
      console.error("Failed to expire link:", err);
    }
  };

  useEffect(() => {
    const loadModelAndCamera = async () => {
      const model = await cocoSsd.load();
      modelRef.current = model;

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    loadModelAndCamera();
  }, []);

  useEffect(() => {
    const detect = async () => {
      if (
        !modelRef.current ||
        !videoRef.current ||
        videoRef.current.readyState !== 4
      )
        return;

      const predictions = await modelRef.current.detect(videoRef.current);

      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        predictions.forEach((pred) => {
          if (pred.score && pred.score > 0.6) {
            const [x, y, width, height] = pred.bbox;
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);
            ctx.fillStyle = "red";
            ctx.fillText(pred.class, x, y > 10 ? y - 5 : 10);

            if (
              ["cell phone", "camera", "laptop"].includes(pred.class) &&
              !expiredRef.current
            ) {
              expireLink(`Link expired due to ${pred.class} detection.`);
            }
          }
        });
      }
    };

    const interval = setInterval(detect, 3000); 

    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="fixed bottom-2 right-2 w-[1px] h-[1px] overflow-hidden opacity-0">
      <video ref={videoRef} autoPlay muted playsInline width={300} height={300} />
      <canvas ref={canvasRef} width={300} height={300} />
    </div>
  );
}
