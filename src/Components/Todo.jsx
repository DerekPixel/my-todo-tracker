import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({todoObject, removeTodoObject}) => {

  return (
    <div
      className='todo'
    >
      <details>
        <summary
          className='todo-summary'
        >
          <h2
            className='todo-header'
          >{todoObject.todoTitle}</h2>
          <div>date</div>
        </summary>

        <div
          className='todo-details'
        >
          <p>{todoObject.todoInfo}</p>
        </div>
      </details>

      <button
        className='todo-delete-btn'
        onClick={() => removeTodoObject(todoObject.todoIndex)}
      >X</button>

    </div>
  )
}

Todo.propTypes = {
  todoObject: PropTypes.object,
  removeTodoObject: PropTypes.func,
}

export default Todo
