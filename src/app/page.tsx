import Link from "next/link";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center gap-6">
        <Link
          href="/character/new"
          className="bg-primary text-primary-foreground font-display hover:bg-primary-glow rounded px-8 py-3 text-4xl transition-colors"
        >
          Create a Character
        </Link>
        {/* <Link
          href="/character/new"
          className="bg-primary text-primary-foreground font-display hover:bg-primary-glow rounded px-8 py-3 text-4xl transition-colors"
        >
          Sign up
        </Link> */}
        <Link
          href="/api/auth/signin"
          className="border-primary text-primary font-display hover:bg-primary hover:text-primary-foreground rounded border px-8 py-3 text-4xl transition-colors"
        >
          Sign in
        </Link>
      </main>
    </>
  );
}
