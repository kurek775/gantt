import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";

interface TaskFormProps {

}

const TaskForm: React.FC<TaskFormProps> = (TaskFormProps) => {
    const { project, setProject }: any = useContext(AuthContext);
    const [task, setTask] = useState('');
    const [note, setNote] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [loading, setLoading] = useState(false)
    const [taskproject, setTaskProject]:any = useState('');
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
    
        const response = await fetch('http://localhost:5000/api/task', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task,
                start,
                end,
                taskproject,
                note
            }),
        })
      
   



    }

    return (<Card>
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Label>Task title</Form.Label>
                <Form.Control value={task} onChange={(e) => setTask(e.target.value)} required type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Project</Form.Label>
                <Form.Select onChange={(e) =>  setTaskProject(e.target.value)} required >
                    <option value={""}>Choose project...</option>
                    {project?.map((project: any,index: number) => 
                    <option value={project._id} key={index} >{project.name}</option>
                    )}
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Note</Form.Label>
                <Form.Control value={note} onChange={(e) => setNote(e.target.value)} required as="textarea" placeholder="Note" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Start</Form.Label>
                        <Form.Control value={start} onChange={(e) => setStart(e.target.value)} required type="date" placeholder="start" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>End</Form.Label>
                        <Form.Control value={end} onChange={(e) => setEnd(e.target.value)} required type="date" placeholder="end" />
                    </Form.Group></Col>
            </Row>


            <Button disabled={loading} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Card>);
}

export default TaskForm;