import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Components/Content.js'
import Header from './Components/Header.js'
import Total from './Components/Total.js'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
