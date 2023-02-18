import './TaskBoard.css';
import board from '../assets/board.svg';
import { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import { Task } from './Task';
import { AddNew } from './AddNew';


export function TaskBoard() {

  const { tasks, setTasks } = useContext(TasksContext);


  return (<>
    <AddNew tasks={tasks} setTasks={setTasks}></AddNew>
    <div className='TaskBoardBlock'>
      <img src={board} />
      <span>Quadro de tarefas</span>
    </div>
    <div className='TaskBoardTasks'>
      {tasks.map(
        (task, i) => 
        <Task name={task.name} status={task.status} key={i}></Task>
      )}
    </div>
  </>);
}