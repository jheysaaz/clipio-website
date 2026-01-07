export function StatsSection() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "2M+", label: "Snippets Saved" },
    { value: "99.9%", label: "Uptime" },
    { value: "10ms", label: "Search Speed" },
  ];

  return (
    <section className="border-b border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
