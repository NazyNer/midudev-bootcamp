export const Total = ({parts}) => {
  const maxParts = parts.length
  let suma = 0
  for (let i = 0; i < maxParts; i++) {
    suma += parts[i].exercises
  }
  
  return(
    <p><strong>total of {suma} exercises</strong></p>
  )
}