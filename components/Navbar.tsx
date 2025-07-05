import { SignInButton, SignUpButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { ModeToggle } from "./ModeToggle"

export default function Navbar(){
    return(
        <nav className="flex flex-row gap-4 p-4 justify-between items-center ">
            <div className="text-2xl  dark:text-gray-300">
        <h2>ArchLock</h2>
            </div>
            <div className="gap-4 mr-6 flex flex-row">
                <SignInButton>
                <Button className="animate transition-transform hover:scale-110" variant={"ghost"}>SignIn</Button>
                </SignInButton>
                <SignUpButton>
         <Button   className="animate transition-transform hover:scale-110"        variant={"ghost"}>Signup</Button>

                </SignUpButton>
                <ModeToggle />
            </div>
        </nav>

    )
}