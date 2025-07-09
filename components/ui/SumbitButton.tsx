"use client"

import { useFormStatus } from "react-dom"
import { Button } from "./button"

export default function SubmitButton(){
 const {pending}=useFormStatus();
 return(
    <Button className="w-full mt-2  " type="submit" disabled={pending}>
      {pending?"Submitting...":"Submit"}
    </Button>
 )
}