export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50 px-4">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white mx-auto" />
        <p className="text-base sm:text-lg font-medium">Securing your session...</p>
        <p className="text-sm opacity-70">Initializing security systems and AI detection</p>
      </div>
    </div>
  );
}
