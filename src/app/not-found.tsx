import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-extrabold">404</h1>

      <h2 className="mt-4 text-2xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black transition-transform active:scale-95"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;