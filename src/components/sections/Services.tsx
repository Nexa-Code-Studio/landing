const services = [
  {
    title: "Web & App Development",
    desc: "Membangun web dan aplikasi yang stabil, cepat, dan siap scale. Fokus pada kebutuhan bisnis, bukan eksperimen.",
  },
  {
    title: "UI / UX Design",
    desc: "Desain yang masuk akal, mudah digunakan, dan berbasis user flow — bukan sekadar cantik di Dribbble.",
  },
  {
    title: "Internal Tools & Dashboard",
    desc: "Sistem admin, dashboard, dan tools internal untuk operasional bisnis yang efisien.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-6 md:px-12 py-24"
    >
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-900">
          What We Do
        </h2>
        <p className="mt-4 text-gray-600">
          Kami membantu bisnis membangun produk digital yang fungsional,
          terukur, dan siap digunakan di dunia nyata.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition"
          >
            <h3 className="text-lg font-medium text-gray-900">
              {s.title}
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
