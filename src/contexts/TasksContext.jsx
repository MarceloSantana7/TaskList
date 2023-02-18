import { useState, createContext } from 'react';

export const TasksContext = createContext({});

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    { name: 'Criar projeto 🛹', status: true },
    { name: 'Atualizar linkedin 🚨', status: false },
    { name: 'Atualizar Portfólio 🚥', status: false }
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );

}

export default TasksProvider;