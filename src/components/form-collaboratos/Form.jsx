import { useState } from "react"

export default function FormCollaborator({ data, setCollaborator }) {
  
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handdler = (e) => {
    e.preventDefault();
    const idMapping = Number(data[data.length - 1].id) + 1;
    let newObject = {
      "id": idMapping.toString(),
      "nombre": nombre,
      "correo": correo
    }

    console.log([...data, newObject])

    setCollaborator([...data, newObject]);
    console.log(data);

    setNombre("");
    setCorreo("");
  }

  return (
    <form onSubmit={handdler}>
      <label className="relative block p-3 border-2 border-gray-200 rounded-lg">
        <span className="text-xs font-medium text-gray-500">
          Nombre
        </span>

        <input className="w-full p-0 text-sm border-none focus:ring-0" 
          id="nombre" 
          type="text" 
          placeholder="Ingresa el nombre del colaborador"
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
      </label>
        <br />
      <label className="relative block p-3 border-2 border-gray-200 rounded-lg" >
        <span className="text-xs font-medium text-gray-500" >
          Correo
        </span>
        <input className="w-full p-0 text-sm border-none focus:ring-0" 
          id="correo" 
          type="email" 
          placeholder="Ingresa correo del colaborador"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        </label>

      <button>Agregar colaborador</button>
    </form>
  )
}