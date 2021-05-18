import {React, useState} from 'react'
import PropTypes from 'prop-types'

import {returnClonedArrayOfObjects} from '../functions.js'

const MakeNewTodo = ({setArrayOfTodoObjects, arrayOfTodoObjects}) => {

  const [todoTitle, setTodoTitle] = useState('');
  const [todoInfo, setTodoInfo] = useState('')

  function makeNewTodoObjectAndSaveToTheTodoArray() {

    if(todoTitle !== '') {
      var arrayOfTodoObjectsClone = returnClonedArrayOfObjects(arrayOfTodoObjects);

      var newTodoObject = {
        todoTitle,
        todoInfo
      }
      
      arrayOfTodoObjectsClone.push(newTodoObject);

      setTodoTitle('');
      setTodoInfo('');
      setArrayOfTodoObjects(arrayOfTodoObjectsClone);
    }

    return;
  }

  return (
    <div
      className='make-new-todo'
    >

      <label htmlFor="Todo-Title">Todo Title *</label>
      <input 
        required
        type="text" 
        name="Todo-Title"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />

      <label htmlFor="Todo-Info">Todo Info</label>
      <textarea 
        name="Todo-Info"
        value={todoInfo}
        onChange={(e) => setTodoInfo(e.target.value)}
      ></textarea>

      <button
        onClick={() => makeNewTodoObjectAndSaveToTheTodoArray()}
      >Make New Todo</button>

    </div>
  )
}

MakeNewTodo.propTypes = {
  setArrayOfTodoObjects: PropTypes.func,
  arrayOfTodoObjects: PropTypes.array
}

export default MakeNewTodo
