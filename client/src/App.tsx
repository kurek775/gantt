import Project from "./components/project"
import Task from "./components/task"
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [project, setProject]: any = useState()
  async function getProjects() {


    const response = await fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json();
    setProject(data[0]);
  }


  useEffect(() => {

    getProjects();


  }, []);

  console.log(project);

  return (
    <div className="App">
      <Project name={project?.name} tasks={project?.tasks} ></Project>

    </div>
  )
}

export default App
