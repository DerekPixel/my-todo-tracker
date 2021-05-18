import { useState, useEffect } from 'react';
import './App.css';
import MakeNewTodo from './Components/MakeNewTodo';
import Todo from './Components/Todo';

function App() {

  const [arrayOfTodoObjects, setArrayOfTodoObjects] = useState(returnLocalStorageArrayIfItExistsOrCreateIt());

  useEffect(() => {
    
    savePalettesToLocalStorage()

    function savePalettesToLocalStorage() {
      var arrayOfTodoObjectsCopy = arrayOfTodoObjects.slice();
  
      window.localStorage.setItem('user-todo-list', JSON.stringify(arrayOfTodoObjectsCopy));
    }

  }, [arrayOfTodoObjects])

  var todoObjectsMapped = arrayOfTodoObjects.map((todoObject, i) => {



    return (
      <Todo todoObject={todoObject} key={i} />
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

    </div>
  );
}

export default App;
