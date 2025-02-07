import { TriangleAlertIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-primary/10 px-6 py-12 sm:px-8">
      <div className="mx-auto max-w-md text-center">
        <TriangleAlertIcon className="mx-auto h-14 w-14 text-primary animate-pulse" />
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">Oops, page not found!</h1>
        <p className="mt-4 text-lg text-primary-foreground/80">
          The page you are looking for may have been moved or doesn’t exist. Let’s get you back on track.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            prefetch={false}
          >
            Return to Honey
          </Link>
        </div>
      </div>
    </div>
  );
}
