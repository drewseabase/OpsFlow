import Link from 'next/link';
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

export function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              OpsFlow
            </Link>
            <SignedIn>
              <Link 
                href="/dashboard" 
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Dashboard
              </Link>
              <Link 
                href="/requests/new" 
                className="text-gray-700 hover:text-blue-600 transition"
              >
                New Request
              </Link>
            </SignedIn>
          </div>
          
          <div className="flex items-center">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}