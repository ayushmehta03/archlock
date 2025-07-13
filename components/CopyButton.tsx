"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ link }: { link: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // reset after 1.5 seconds
  };

  return (
    <Button
      onClick={handleCopy}
      variant="ghost"
      aria-label="Copy link to clipboard"
      className="flex items-center gap-2"
    >
      {copied ? (
        <>
          <Check className="h-5 w-5 text-green-500" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-5 w-5" />
          Copy
        </>
      )}
    </Button>
  );
}
