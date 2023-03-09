import { Card, Form, Button } from "react-bootstrap";
import {useState} from "react";

interface ProjectFormProps {

}

const ProjectForm: React.FC<ProjectFormProps> = (ProjectFormProps) => {
    
    const [project, setProject] = useState('');
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
    
        const response = await fetch('http://localhost:5000/api/project', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: project
          }),
        })
    
      
    
      }
    return (<Card>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Project title</Form.Label>
                <Form.Control type="text" placeholder="Title"  value={project} onChange={(e) => setProject(e.target.value)} required  />
            </Form.Group>
            <Button disabled={loading}  variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Card>);
}

export default ProjectForm;