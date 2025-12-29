export default function Loading() {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-[#fefbe9]"
        aria-busy="true"
        aria-live="polite"
      >
        <div className="text-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#c0897f] border-r-transparent motion-reduce:animate-none"
            role="status"
            aria-label="Lädt"
          />
          <p className="mt-4 text-gray-700 font-medium">Einen Moment bitte...</p>
        </div>
      </div>
    );
  }
  