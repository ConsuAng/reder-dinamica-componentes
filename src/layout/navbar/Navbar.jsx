import { useState } from "react"

export default function Navbar({ data, setCollabList }) {
  //console.log(typeof data)
  const [buscar, setBuscar] = useState("");

  const searchHandler  = () => {

    let search = data.filter((x) => x.nombre.toLowerCase().includes(buscar.toLowerCase()))
    console.log(search);
    setCollabList(search);
  }

  const cleanSearch = () => {
    setCollabList(data);
    setBuscar("");
  }

  return (
    <header className="bg-gray-50">
      <div className="flex items-center px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl ">
            Buscador de colaboradores
          </h1>
        </div>
        <div className="relative">
          <label className="sr-only"> Search </label>
          <input
            className="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Buscar un colaborador"
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
          />
          <button
            className="absolute p-2 text-gray-600 rounded-full transition -translate-y-1/2 hover:text-gray-700 bg-gray-50 top-1/2 right-1"
            type="button"
            aria-label="Submit Search"
            onClick={searchHandler}
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
      <button onClick={cleanSearch}>Limpiar</button>
    </header>
  )
}