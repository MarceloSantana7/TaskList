import './Task.css';
import check from '../assets/check.svg';
import frame from '../assets/Frame.svg';
import remove from '../assets/remove.svg';
import { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';

export function Task({ name, status }) {

  const { tasks, setTasks } = useContext(TasksContext);

  return (
    <div className='TaskSingle'>
      {status ? <img src={check} alt="" /> : <img src={frame} alt="" />}
      <span>{name}</span>
      <img src={remove} alt="" onClick={() => setTasks([
        { name: 'Criar projeto 🛹', status: true }
      ])} />
    </div>
  );
}