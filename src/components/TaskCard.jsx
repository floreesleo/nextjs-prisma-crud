"use client";
import { useRouter } from "next/navigation";

export default function TaskCard({ task }) {
  const router = useRouter();
  return (
    <div
      className="bg-blue-600 p-3 rounded hover:bg-blue-800 hover:cursor-pointer"
      onClick={() => {
        router.push("/tasks/edit/" + task.id);
      }}
    >
      <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-end">
        {new Date(task.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}
