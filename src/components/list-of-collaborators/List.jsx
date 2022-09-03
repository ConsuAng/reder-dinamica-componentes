import { useState } from "react";

export default function List({ data }) {

  const [collaborators, setCollaborator] = useState(data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  const handdler = (e) => {
    e.preventDefault();
    const idMapping = Number(collaborators[collaborators.length - 1].id) + 1;
    let userAdded = {
      "id": idMapping.toString(),
      "nombre": name,
      "correo": email
    }
    setCollaborator([...collaborators, userAdded]);
    setName("");
    setEmail("");
  }

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  const list = !search
    ? collaborators
    : collaborators.filter((x) => x.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );

  return (
    <>
      <header className="bg-[#FFC300]">
        <div className="flex items-center px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl ">
              Buscador de colaboradores
            </h1>
          </div>
          <div className="relative ml-7">
            <label className="sr-only"> Search </label>
            <input
              className="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Buscar un colaborador"
              value={search}
              onChange={(e) => searchHandler(e)}
            />

            <button
              className="absolute p-2 text-gray-600 rounded-full transition -translate-y-1/2 hover:text-gray-700 bg-gray-50 top-1/2 right-1"
              type="button"
              aria-label="Submit Search"
              disabled={true}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <form onSubmit={handdler} className="flex flex-col items-center justify-center pt-6 pb-8">
        <label className="relative w-3/5 block p-3 border-2 border-gray-200 rounded-lg">
          <span className="text-xs font-medium text-gray-500">
            Nombre
          </span>
          <input className="w-full p-0 text-sm border-none focus:ring-0"
            id="nombre"
            type="text"
            placeholder="Ingresa el nombre del colaborador"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="relative w-3/5 block p-3 border-2 border-gray-200 rounded-lg" >
          <span className="text-xs font-medium text-gray-500" >
            Correo
          </span>
          <input className="w-full p-0 text-sm border-none focus:ring-0"
            id="correo"
            type="email"
            placeholder="Ingresa correo del colaborador"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div className="pt-6">
          <button className="bg-[#FFEA00]">Agregar colaborador</button>
        </div>
      </form>

      <div className="text-xl pb-6 underline decoration-wavy">Lista Colaboradores</div>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {list.map((collaborator) => (
              <tr key={collaborator.id}>
                <td className="text-left"> {collaborator.nombre}</td>
                <td className="text-left pl-8"> {collaborator.correo}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}