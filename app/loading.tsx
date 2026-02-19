export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f1419]"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-white"
          role="status"
        />
        <p className="text-sm font-medium text-white/70">Loading...</p>
      </div>
    </div>
  );
}
