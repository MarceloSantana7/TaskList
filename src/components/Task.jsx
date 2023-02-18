import './Task.css';
import check from '../assets/check.svg';
import frame from '../assets/Frame.svg';
import remove from '../assets/remove.svg';
import { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';

export function Task({ name, status }) {

  const { tasks, setTasks } = useContext(TasksContext);

  const removeItem = () => {
    const updateTasks = tasks.filter(task => task.name !== name);
    console.log(updateTasks);
    setTasks(updateTasks);
  };

  const updateTaskStatus = () => {
    const updatedTasks = tasks.map(task => {
      if (task.name === name) {
        return { ...task, status: !status };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='TaskSingle'>
      {status ? <img src={check} alt="" onClick={updateTaskStatus} /> : <img src={frame} alt="" onClick={updateTaskStatus} />}
      <span className={status ? 'active' : ''} onClick={updateTaskStatus}>{name}</span>
      <img src={remove} alt="" onClick={removeItem} />
    </div>
  );
}