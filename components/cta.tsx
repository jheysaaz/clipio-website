import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="border-t border-border py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Start saving time today
          </h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Join thousands of people who save hours every week with Clipio
          </p>
          <Button
            size="lg"
            className="gap-2 bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90"
          >
            Try Clipio for free
            <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Free forever • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
