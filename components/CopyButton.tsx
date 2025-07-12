"use client"

import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export default function CopyButton({ link }: { link: string }) {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(link)
      }}
      variant="ghost"
    >
        
      <Copy className="h-5 w-5 mr-2" />
      Copy
    </Button>
  )
}
