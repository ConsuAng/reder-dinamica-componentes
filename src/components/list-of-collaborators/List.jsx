export default function List({collabList}) {
  
  return (
    <>
    <ul>
      {collabList.map((collaborator) => (
        <li key={collaborator.id}>{collaborator.nombre} {collaborator.correo}
        </li>
      ))}
    </ul>
    </>
  )
}