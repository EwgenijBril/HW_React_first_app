import React from 'react'

export default function Task({id, task, done}) {

  const done_style = {
    color: 'green',
    textDecoration: 'line-through'
  }

  const not_done_style = {
    color: 'red'
  }

  const task_style = done ? done_style : not_done_style;

  return (
    <div style={task_style}>
    - {task}
    </div>
  )
}
