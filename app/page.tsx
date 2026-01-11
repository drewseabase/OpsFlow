import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to OpsFlow
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Streamline your purchase request workflow with automated approvals 
              and real-time tracking.
            </p>
            
            <SignedIn>
              <Link 
                href="/dashboard"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Go to Dashboard
              </Link>
            </SignedIn>
            
            <SignedOut>
              <div className="space-x-4">
                <Link 
                  href="/sign-up"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                >
                  Get Started
                </Link>
                <Link 
                  href="/sign-in"
                  className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
                >
                  Sign In
                </Link>
              </div>
            </SignedOut>
          </div>
        </div>
      </main>
    </>
  );
}