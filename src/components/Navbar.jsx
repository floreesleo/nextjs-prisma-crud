import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-zinc-950">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h3 className="font-bold text-3xl hover:translate-x-2 duration-300">
          <Link href="/">
            NextJS <span className="text-green-600">CRUD</span>
          </Link>{" "}
        </h3>
        <ul className="flex gap-x-5 text-lg font-bold">
          <li>
            <Link href="/" className="text-zinc-100 hover:text-sky-400">
              Tareas
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-zinc-100 hover:text-sky-400">
              Nueva tarea
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
