import { Card, Form, Button, Col, Row } from "react-bootstrap";
import {useState} from 'react';

interface TaskFormProps {

}

const TaskForm: React.FC<TaskFormProps> = (TaskFormProps) => {

    const [task, setTask] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
    
        const response = await fetch('http://localhost:5000/api/project', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            task,
            start,
            end
          }),
        })
    
      
    
      }

    return (<Card>
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Label>Task title</Form.Label>
                <Form.Control  value={task} onChange={(e) => setTask(e.target.value)} required  type="text" placeholder="Title" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Start</Form.Label>
                        <Form.Control  value={start} onChange={(e) => setStart(e.target.value)} required type="date" placeholder="start" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>End</Form.Label>
                        <Form.Control value={end} onChange={(e) => setEnd(e.target.value)} required type="date" placeholder="end" />
                    </Form.Group></Col>
            </Row>


            <Button disabled={loading}  variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Card>);
}

export default TaskForm;