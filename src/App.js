import React from 'react'
import Courses from "./components/Courses"
import "./App.css"

export default function App() {
  return (
    <div>
      <h1>Course List</h1>
      <hr />
      <div className='cards'>
      <Courses name="sachin" course="c#"></Courses>
      <Courses name="nishalka" course="python"></Courses>
      <Courses name="fernando" course="javascript"></Courses>
      <Courses name="james" course="php"></Courses>
      </div>
    </div>
  )
}
