const projects = [
  {
    title: "Kasirq",
    subtitle: "POS & Inventory System",
    desc: "Sistem kasir dan manajemen stok untuk UMKM. Fokus pada kecepatan transaksi dan kemudahan operasional.",
    tech: ["Flutter", "Firebase", "REST API"],
  },
  {
    title: "Keerja",
    subtitle: "Job Marketplace Platform",
    desc: "Platform lowongan kerja dengan dashboard perusahaan dan sistem langganan premium.",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
  },
  {
    title: "Internal Dashboard",
    subtitle: "Business Monitoring Tool",
    desc: "Dashboard internal untuk monitoring performa bisnis dan laporan operasional.",
    tech: ["Next.js", "Tailwind", "Chart"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-6xl px-6 md:px-12 py-24 bg-gray-50"
    >
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-900">
          Selected Work
        </h2>
        <p className="mt-4 text-gray-600">
          Beberapa proyek yang kami bangun, baik untuk klien maupun inisiatif internal.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-sm transition"
          >
            <h3 className="text-lg font-medium text-gray-900">
              {p.title}
            </h3>
            <p className="text-sm text-gray-500">
              {p.subtitle}
            </p>

            <p className="mt-4 text-sm text-gray-600">
              {p.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
