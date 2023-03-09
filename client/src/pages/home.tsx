import ProjectForm from "../components/projectform";
import TaskForm from "../components/taskform";
import Container from "react-bootstrap/esm/Container";
import Project from "../components/project"
import Task from "../components/task";
import { Card, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";
interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = (HomeProps) => {

    const [project, setProject]: any = useState()
    async function getProjects() {
  
    const response = await fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      const data = await response.json();
      setProject(data);
    }
  
  
    useEffect(() => {
  
      getProjects();
  
  
    }, []);

    return (  <>  {
        project?.map((item: any) =>
          <Project name={item?.name} tasks={item?.tasks} ></Project>
        )
      }
      <Container className="container-xxl">
        <Row>
          <Col>
            <ProjectForm></ProjectForm>
          </Col>
          <Col>
            <TaskForm></TaskForm>
          </Col>
        </Row>
      </Container>  </>);
}
 
export default Home;