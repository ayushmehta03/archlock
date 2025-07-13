import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-16 px-4 py-6 text-sm text-center text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="mb-2 font-medium text-gray-800 dark:text-white">
        🔒 ArchLock — Securing Your Blueprints
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-3 text-sm">
        <Link href="/dashboard" className="hover:underline transition">
          Dashboard
        </Link>
        <Link href="/contact" className="hover:underline transition">
          Contact Us
        </Link>
        <Link href="/help" className="hover:underline transition">
          Help
        </Link>
      </div>

      <div className="mb-1">Made with ❤️ by Ayush Mehta</div>
      <div className="text-xs text-gray-500">© 2025 ArchLock. All rights reserved.</div>
    </footer>
  );
}
