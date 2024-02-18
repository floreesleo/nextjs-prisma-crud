import { prisma } from "@/libs/prisma";

async function loadTasks() {
  // const res = await fetch("http://localhost:3000/api/tasks");
  // const data = await res.json();

  return await prisma.task.findMany();
}

export default async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-blue-600 p-3 rounded hover:bg-blue-800 hover:cursor-pointer"
          >
            <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-end">
              {new Date(task.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
