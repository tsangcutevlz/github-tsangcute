import {useStore, actions} from './store'
import './Todolist.css'
import { useRef, useState } from 'react'

function App(){

  const todoRef = useRef();

  const [state, dispatch] = useStore();
  const {todos, todoInput} = state;
  const [isHidden, setIsHidden] = useState(true);
  const [indexEdit, setIndexEdit] = useState();

  const handleEdit = (todoInput, index) => {
    dispatch(actions.editTodoInput(todoInput));
    setIsHidden(false);
    setIndexEdit(index);
    todoRef.current.focus();
  };

  const handleUpdate = () => {
    dispatch(actions.updateTodoInput(todoInput, indexEdit));
    setIsHidden(true);
    dispatch(actions.setTodoInput(""));
    todoRef.current.focus();
  };

  const handleCreateTodo = () => {
    dispatch(actions.addTodoInput(todoInput))
    dispatch(actions.setTodoInput(''))
    todoRef.current.focus();
  }

  // console.log(todos);

  return (
    <div style = {{padding: 20}} className={'todo-wrap'}>
        <h3 className={'todo-title'}>TODO LIST</h3>
          <input 
            ref={(todoRef)}
            className={'todo-input'}
            value = {todoInput}
            placeholder="Enter todo..."
            onChange={e => {
              dispatch(actions.setTodoInput(e.target.value))
            }}
          />
          <button 
          className={'todo-submit'} 
          onClick={handleCreateTodo} 
          style={{display: isHidden ? 'block' : 'none'}}
          >
            Add
          </button>
          <button 
          className={'todo-submit'} 
          onClick={handleUpdate} 
          style={{display: isHidden ? 'none' : 'block'}}
          >
            Update
          </button>

          <ul className="todo-lists">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <span className="todo-icon" onClick={() => dispatch(actions.removeTodoInput(index))}>&times;</span>
              <span className="todo-icon" onClick={() => handleEdit(todos, index)}>&Sigma;</span>
            </li>
          ))}
          </ul>
      </div> 
  )
}

export default App