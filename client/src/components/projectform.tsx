import { Card, Form, Button } from "react-bootstrap";
import {useState, useContext} from "react";
import { AuthContext } from "../context/AuthContext";

interface ProjectFormProps {

}

const ProjectForm: React.FC<ProjectFormProps> = (ProjectFormProps) => {
    const { user, setUser }: any = useContext(AuthContext);
    const { project, setProject }: any = useContext(AuthContext);
    const [projectname, setProjectName ]: any= useState(''); 
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
    
        const response = await fetch('http://localhost:5000/api/project', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: projectname,
            owner: user.id
          }),
        })
        const data = await response.json();
        setProject(data);
      
    
      }
    return (<Card>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Project title</Form.Label>
                <Form.Control type="text" placeholder="Title"  value={projectname} onChange={(e) => setProjectName(e.target.value)} required  />
            </Form.Group>
            <Button disabled={loading}  variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Card>);
}

export default ProjectForm;