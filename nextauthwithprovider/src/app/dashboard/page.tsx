import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // redirect to login if not authenticated
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl mb-4">Access Denied</h2>
        <a href="/login" className="text-blue-500 underline">
          Go to Login
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-4">Welcome, {session.user.name}</h1>
      <p className="mb-4">Email: {session.user.email}</p>
      <img
        src={session.user.image}
        alt="Profile"
        className="w-20 h-20 rounded-full mb-4"
      />
      <a
        href="/api/auth/signout"
        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
      >
        Logout
      </a>
    </div>
  );
}
