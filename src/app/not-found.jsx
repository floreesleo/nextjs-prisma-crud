import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-[calc(100vh-18rem)] justify-center items-end">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3">
          <span className="text-red-700">Ups!</span> no se encontró la página.
        </h1>
        <Link href="/" className="text-blue-600 text-2xl underline">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
