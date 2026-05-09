import Link from "next/link";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Link href="/character/new">Create a Character</Link>
      <Link href="/api/auth/signin">Sign in</Link>
    </main>
  );
}
