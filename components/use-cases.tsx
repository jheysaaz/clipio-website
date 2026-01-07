import { Card } from "@/components/ui/card";
import Image from "next/image";

export function UseCasesSection() {
  const useCases = [
    {
      title: "For Developers",
      description:
        "Store boilerplate code, config files, git commands, SQL queries, and debugging solutions.",
      image: "/developer-coding-workspace-dark.jpg",
      tags: ["Code", "CLI", "Git", "SQL"],
    },
    {
      title: "For Content Writers",
      description:
        "Keep email templates, social media posts, article outlines, and frequently used phrases at your fingertips.",
      image: "/writing-content-workspace.jpg",
      tags: ["Email", "Social", "Blog"],
    },
    {
      title: "For Support Teams",
      description:
        "Standardized responses, troubleshooting guides, and customer support templates for consistent service.",
      image: "/customer-support-team.png",
      tags: ["Support", "Templates", "FAQ"],
    },
    {
      title: "For Productivity",
      description:
        "Meeting notes, task templates, project checklists, and workflow documentation all in one place.",
      image: "/productivity-workspace-notes.jpg",
      tags: ["Notes", "Tasks", "Docs"],
    },
  ];

  return (
    <section id="use-cases" className="border-b border-border py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            Built for every workflow
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Whether you&#39;re coding, writing, or supporting customers,
            SnippetVault adapts to your needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{useCase.title}</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
