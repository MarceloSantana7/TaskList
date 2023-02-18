import './AddNew.css';
import task from '../assets/task.svg';
import { useContext, useRef } from 'react';
import { TasksContext } from '../contexts/TasksContext';

export function AddNew({ tasks, setTasks }) {

  const textTask = useRef();

  const createNew = () => {
    const newTaskName = textTask.current.value;
    if (newTaskName) {
      setTasks([...tasks, { name: newTaskName, status: false }]);
      textTask.current.value = '';
    }
  };

  return (
    <div className='AddNew'>
      <div className='AddNewBlock'>
        <img src={task} alt="" />
        <span className='AddNewTask'>Adicionar uma tarefa</span>
      </div>
      <div className='TaskBlock'>
        <input type="text" ref={textTask} placeholder='Descreva a tarefa' />
        <button onClick={createNew}>Criar tarefa</button>
      </div>
    </div>
  );
}

