import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [location] = useLocation();
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p><strong>Current path:</strong> {location}</p>
            <p><strong>Base URL:</strong> {basePath}</p>
            <p><strong>Window location:</strong> {typeof window !== 'undefined' ? window.location.pathname : 'N/A'}</p>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The router is looking for routes but couldn't find a match for the current path.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
