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
  const course = 'Half Stack application development'
  return(
    <h1>{course}</h1>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
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
