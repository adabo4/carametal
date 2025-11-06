"use client";
import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    // Redirect to Umami dashboard - use environment variables
    const isDevelopment = process.env.NODE_ENV === "development";
    const analyticsUrl = isDevelopment
      ? process.env.NEXT_PUBLIC_ANALYTICS_DEV_URL
      : process.env.NEXT_PUBLIC_ANALYTICS_PROD_URL;

    if (analyticsUrl) {
      window.location.href = analyticsUrl;
    } else {
      console.error("Analytics URL not configured");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to analytics dashboard...</p>
        <p className="text-sm text-gray-500 mt-2">
          If you're not redirected,
          <a
            href={
              process.env.NODE_ENV === "development"
                ? process.env.NEXT_PUBLIC_ANALYTICS_DEV_URL
                : process.env.NEXT_PUBLIC_ANALYTICS_PROD_URL
            }
            className="text-blue-600 underline ml-1"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
