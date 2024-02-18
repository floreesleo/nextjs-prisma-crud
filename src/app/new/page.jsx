"use client";

import { useRouter } from "next/navigation";

export default function NewPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        // esto tiene que estar tal cual porque es lo que espera el back-end para poder entenderlo como un objeto JSON.
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    const data = await res.json();
    console.log(data);

    router.push("/");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-zinc-800 p-10 lg:w-1/4 md:w-1/2" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          type="text"
          placeholder="Titulo"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          id="description"
          rows="3"
          placeholder="Describe la tarea"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        >
          Crear
        </button>
      </form>
    </div>
  );
}
