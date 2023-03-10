import ProjectForm from "../components/projectform";
import TaskForm from "../components/taskform";
import Container from "react-bootstrap/esm/Container";
import Project from "../components/project"
import { Card, Row, Col } from "react-bootstrap"
import jwt_decode from "jwt-decode";
import { AuthContext } from "../context/AuthContext";
import {useEffect, useContext } from "react";
interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  const { user, setUser }: any = useContext(AuthContext);
  const { project, setProject }: any = useContext(AuthContext);
  async function getProjects() {

    const response = await fetch('http://localhost:5000/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user?.id
      }),
    })

    const data = await response.json();
    setProject(data);
  }






  useEffect(() => {

    const token: any = localStorage.getItem('token');
    setUser(jwt_decode(token));



  }, []);

  useEffect(() => {


    getProjects();


  }, [user]);

  return (<>  {
    project?.map((item: any, index: number) =>
      <Project key={index} name={item?.name} tasks={item?.tasks} ></Project>
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