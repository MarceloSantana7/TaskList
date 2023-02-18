import './App.css';
import { TaskBoard } from './components/TaskBoard';
import { useContext } from 'react';
import { Task } from './components/Task';
import TasksProvider, { TasksContext } from './contexts/TasksContext';

function App() {

  return (
    <TasksProvider>
      <div className="App">
        <div className="App_main">          
          <TaskBoard></TaskBoard>
        </div>
      </div>
    </TasksProvider>
  );
}

export default App;
