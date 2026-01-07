import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/clipio.png"
                alt="Clipio Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-lg font-bold">Clipio</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Clip anything. Find it instantly.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#download" className="hover:text-foreground">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Clipio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
