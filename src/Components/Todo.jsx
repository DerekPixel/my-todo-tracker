import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({todoObject}) => {
  return (
    <div
      className='todo'
    >
      <details>
        <summary>
          <div
            className='todo-header'
          >
            <h2>{todoObject.todoTitle}</h2>
            <button
              className='todo-delete-btn'
            >X</button>
          </div>
        </summary>

        <div
          className='todo-details'
        >
          <p>{todoObject.todoInfo}</p>
        </div>
      </details>


    </div>
  )
}

Todo.propTypes = {
  todoObject: PropTypes.object,
}

export default Todo
