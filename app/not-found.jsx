import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-7xl font-extrabold gradient-title mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-teal-600 text-white px-6 py-3 rounded-lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
