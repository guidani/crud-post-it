import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logged from "./Logged";
import Login from "./Login";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  

  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <h1 className="font-bold text-lg">Post it</h1>
      </Link>
      <ul className="flex items-center gap-5">
        {!session?.user ? (
          <Login />
        ) : (
          <>
            <p>Welcome </p>
            <h1>{session.user.name}</h1>
            <Logged image={session.user?.image} />
          </>
        )}
      </ul>
    </nav>
  );
}
