"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewPage({ params }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title), setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await res.json();
      console.log(data);
    } else {
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
    }

    router.refresh();
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
          onChange={(ev) => setTitle(ev.target.value)}
          value={title}
          className="border border-gray-400 p-2 mb-4 w-full text-black"
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          id="description"
          rows="3"
          placeholder="Describe la tarea"
          onChange={(ev) => setDescription(ev.target.value)}
          value={description}
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
