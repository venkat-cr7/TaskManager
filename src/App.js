import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAdd, setShowAdd] = useState(false);

  const [tasks, setTasks] = useState(

    [
         {
             id: 1,
             text: "Doctor Appointment",
             day: "Feb 6th at 3.30pm",
             reminder: true
         },
         {
             id: 2,
             text: "Meeting at school",
             day: "Feb 6th at 4.00pm",
             reminder: true
         },
         {
             id: 3,
             text: "Food Shopping",
             day: "Feb 6 at 5.00pm",
             reminder: false
         }
      ]

 );

 const addTask = (task) => {
  const id = Math.floor(Math.random()* 10000) + 1 ;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
 }

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

const togglereminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder:
        !task.reminder} : task
      )
    )
}
  
  return (
    <div className="container">
       <Header onAdd = {() => setShowAdd(!showAdd)}
       showAdd = {showAdd} />
       { showAdd && <AddTask onAdd = {addTask} />}
       {tasks.length > 0 ? (
        <Tasks  tasks={tasks} onDelete= {deleteTask}
          onToggle = {togglereminder}
        />
        ) : ("No Tasks to show" )}
    </div>
  );
}

export default App;
