export const Part = ({parts}) => {
  if(typeof parts === 'undefined') {
    return "No hay partes en este curso"
  }
  return (
    <div>
      {
        parts.map((parts) => {
          return <p key={parts.id}>{parts.name} {parts.exercises}</p>
        })
      }
    </div>
  )
}