"use client";

import { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";

export default function SecurityWithObjectDetection({ accessKey }: { accessKey: string }) {
  const expiredRef = useRef(false);
  const [expiredReason, setExpiredReason] = useState("");
  const [cameraAllowed, setCameraAllowed] = useState<boolean | null>(null);
  const [isReady, setIsReady] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const modelRef = useRef<cocoSsd.ObjectDetection | null>(null);

  const speak = (msg: string) => {
    const utterance = new SpeechSynthesisUtterance(msg);
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  const playBeep = () => {
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 880;
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.5);
  };

  const expireLink = async (reason: string) => {
    if (expiredRef.current) return;
    expiredRef.current = true;
    setExpiredReason(reason);
    playBeep();
    speak("Warning! Unauthorized activity detected. This session is being terminated.");
    try {
      await fetch(`/api/expire/${accessKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason }),
      });
    } catch (err) {
      console.error("❌ Failed to expire link:", err);
    }
  };

  useEffect(() => {
    const loadEverything = async () => {
      try {
        console.log("🚀 Initializing TF backend...");
        await tf.setBackend("webgl");
        await tf.ready();

        console.log("📷 Requesting camera...");
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 640 },
            height: { ideal: 480 },
          },
        });

        setCameraAllowed(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await new Promise((res) => {
            videoRef.current!.onloadeddata = () => {
              res(true);
            };
          });
        }

        console.time("⏳ Model load");
        const model = await cocoSsd.load();
        console.timeEnd("⏳ Model load");
        modelRef.current = model;

        console.time("🔥 Model warmup");
        await model.detect(tf.browser.fromPixels(document.createElement("canvas")));
        console.timeEnd("🔥 Model warmup");

        setIsReady(true);
      } catch (err) {
        console.error("❌ Error setting up:", err);
        setCameraAllowed(false);
      }
    };

    loadEverything();
  }, []);

  useEffect(() => {
    if (!isReady) return;

    let animationId: number;

    const detect = async () => {
      if (
        !modelRef.current ||
        !videoRef.current ||
        videoRef.current.readyState !== 4
      ) {
        animationId = requestAnimationFrame(detect);
        return;
      }

      const predictions = await modelRef.current.detect(videoRef.current);
      console.log("🔍 Predictions:", predictions);

      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      predictions.forEach((pred) => {
        if (pred.score && pred.score > 0.5) {
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

      animationId = requestAnimationFrame(detect);
    };

    detect();
    return () => cancelAnimationFrame(animationId);
  }, [isReady]);

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
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const isDangerous =
        (e.ctrlKey || e.metaKey) && ["u", "s", "c", "i", "j"].includes(key);
      const isF12 = key === "f12";

      if (isDangerous || isF12) {
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

  if (cameraAllowed === false) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center text-center px-4 z-50">
        <div>
          <h1 className="text-xl font-semibold">🚫 Camera Permission Required</h1>
          <p className="text-sm mt-2">Please allow camera access and refresh this page.</p>
        </div>
      </div>
    );
  }

  if (!isReady) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center text-center px-4 z-50">
        <div>
          <h1 className="text-lg font-medium">Loading AI Security System...</h1>
          <p className="text-sm opacity-80 mt-2">Preparing detection model and webcam...</p>
        </div>
      </div>
    );
  }

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
    <div className="fixed bottom-2 right-2 w-[80px] h-[80px] opacity-0 pointer-events-none z-50">
      <video ref={videoRef} autoPlay muted playsInline className="w-full h-full" />
      <canvas ref={canvasRef} width={80} height={80} className="absolute top-0 left-0" />
    </div>
  );
}
