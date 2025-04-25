export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1001]">
      <div className="bg-white p-4 rounded-lg shadow-xl flex items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-3"></div>
        <span>Loading emergency services...</span>
      </div>
    </div>
  );
}