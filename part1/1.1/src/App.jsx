const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

const Header = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  return(
    <h1>{course}</h1>
  )
}

const Content = () => {
  const part1 = 'Fundamentos da biblioteca React'
  const part2 = 'Usando props para passar dados'
  const part3 = 'Estado de um componente'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return(
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return(
  <p>Number of exercises : {exercises1 + exercises2 + exercises3}</p>
  )
}

export default App