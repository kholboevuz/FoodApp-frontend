export default function ProductCardLoading() {
  return (
    <div
      role="status"
      className="animate-pulse rounded-lg m-5 dark:bg-gray-700"
    >
      <div className="text-center p-16 "></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
