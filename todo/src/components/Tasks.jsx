import React from "react";

import Task from "./Task";

 const Tasks = ({ tasks }) => {
    
   return (

      //para cada Tasks rederiza uma Task.
      <>
         {tasks.map((task) => <Task task={task}/>)}
      </>
   )
 }

 export default Tasks;