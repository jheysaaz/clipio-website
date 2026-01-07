import { Card } from "@/components/ui/card";
import { Code2, Mail, Zap, Search, FolderOpen, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Code2,
      title: "Code Snippets",
      description:
        "Syntax highlighting for 150+ languages. Never rewrite the same code twice.",
    },
    {
      icon: Mail,
      title: "Email Templates",
      description:
        "Save your best replies and responses. Copy and paste in seconds.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Global keyboard shortcuts. Find any snippet in under a second.",
    },
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Full-text search that actually works. Find snippets by content or tags.",
    },
    {
      icon: FolderOpen,
      title: "Stay Organized",
      description:
        "Folders, tags, and favorites. Organize your way without overthinking it.",
      wip: true,
    },
    {
      icon: Users,
      title: "Team Sharing",
      description:
        "Share snippets with your team. Keep everyone on the same page.",
      wip: true,
    },
  ];

  return (
    <section id="features" className="border-t border-border py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Everything you need
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Built for people who work with text all day
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                  <feature.icon className="h-6 w-6 text-zinc-900 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                </div>
                {feature.wip && (
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                    WIP
                  </span>
                )}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
