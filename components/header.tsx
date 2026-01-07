import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/clipio.png"
            alt="Clipio Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-xl font-bold">Clipio</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
          <Button
            size="sm"
            className="bg-zinc-900 text-zinc-50 hover:bg-zinc-900/75"
          >
            <Link href="/register">Try for free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
