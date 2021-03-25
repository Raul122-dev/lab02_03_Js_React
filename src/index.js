import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Components/Content.js'
import Header from './Components/Header.js'
import Total from './Components/Total.js'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
