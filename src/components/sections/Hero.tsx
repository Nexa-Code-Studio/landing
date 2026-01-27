import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-24 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
          We Build Reliable Digital Products
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          NexaCode membantu bisnis membangun aplikasi web dan sistem internal
          yang stabil, scalable, dan siap dipakai jangka panjang.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="#portfolio"
            className="rounded-md bg-black px-6 py-3 text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Lihat Portfolio
          </Link>

          <Link
            href="#contact"
            className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
