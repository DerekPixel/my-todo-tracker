import { useState, useEffect } from 'react';
import './App.css';
import MakeNewTodo from './Components/MakeNewTodo';
import Todo from './Components/Todo';

import {returnClonedArrayOfObjects} from './functions.js'

function App() {

  const [arrayOfTodoObjects, setArrayOfTodoObjects] = useState(returnLocalStorageArrayIfItExistsOrCreateIt());

  useEffect(() => {
    
    saveTodosToLacalStorage()

    function saveTodosToLacalStorage() {
      var arrayOfTodoObjectsCopy = arrayOfTodoObjects.slice();
  
      window.localStorage.setItem('user-todo-list', JSON.stringify(arrayOfTodoObjectsCopy));
    }

  }, [arrayOfTodoObjects])

  var todoObjectsMapped = arrayOfTodoObjects.map((todoObject, i) => {
    return (
      <Todo 
        todoObject={todoObject} 
        removeTodoObject={(todoIndex) => removeTodoObject(todoIndex)}
        key={i} 
      />
    )
  })

  function returnLocalStorageArrayIfItExistsOrCreateIt() {
    if(window.localStorage.getItem('user-todo-list') === null) {
      window.localStorage.setItem('user-todo-list', makeNewlocalStorageArray());
    } else {
      return JSON.parse(window.localStorage.getItem('user-todo-list'));
    }
    return JSON.parse(window.localStorage.getItem('user-todo-list'));
  };

  function makeNewlocalStorageArray() {
    var data = [];
    return JSON.stringify(data);
  }

  function removeTodoObject(todoIndex) {

    var arrayOfTodoObjectsClone = returnClonedArrayOfObjects(arrayOfTodoObjects);

    arrayOfTodoObjectsClone.splice(todoIndex, 1);

    //fix todos indices after splicing
    for(var i = 0; i < arrayOfTodoObjectsClone.length; i++) {
      arrayOfTodoObjectsClone[i].todoIndex = i;
    }

    setArrayOfTodoObjects(arrayOfTodoObjectsClone);

  }

  function fixTodoObjects() {

    var arrayOfTodoObjectsClone = returnClonedArrayOfObjects(arrayOfTodoObjects);

    var arrayCopy = [];

    for(var i = 0; i < arrayOfTodoObjectsClone.length; i++) {
      var newObject = {}

      newObject.todoTitle = 
      arrayOfTodoObjectsClone[i].todoTitle ? 
      arrayOfTodoObjectsClone[i].todoTitle : `This is a Temp Title #${i}`;

      newObject.todoInfo = 
      arrayOfTodoObjectsClone[i].todoInfo ? 
      arrayOfTodoObjectsClone[i].todoInfo : '';

      newObject.todoIndex = i;

      arrayCopy.push(newObject);
    }

    setArrayOfTodoObjects(arrayCopy);

  }

  return (
    <div className="App">
      <MakeNewTodo 
        setArrayOfTodoObjects={(newArray) => setArrayOfTodoObjects(newArray)} 
        arrayOfTodoObjects={arrayOfTodoObjects}
      />

      <div
        className='todos'
      >
        {todoObjectsMapped}
      </div>

      <button
        onClick={() => fixTodoObjects()}
      >Fix Todo Data</button>

    </div>
  );
}

export default App;
