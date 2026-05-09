import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/character/new">Create a Character</Link>
      <Link href="/api/auth/signin">Sign in</Link>
    </main>
  );
}
