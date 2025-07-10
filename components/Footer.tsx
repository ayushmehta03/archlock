import Link from "next/link"


export default function Footer(){
    return(
            <footer className="flex flex-col items-center text-center text-sm justify-center">
                <div className="mb-2">🔒 ArchLock  Securing Your Blueprints</div>
                <div className="flex  gap-6 text-center mb-4">
                    <Link href="/dashboard" className="hover:scale-110 ">Dashboard</Link>
                   <Link href="/contact" className="hover:scale-110">Contact Us</Link>
                   <Link href="/help" className="hover:scale-110">Help</Link>
                </div>
      <div className="mb-2">Made with ❤️ by Ayush Mehta</div>
       <div>© 2025 ArchLock. All rights reserved.</div>

            </footer>
    )
}
