import { Card, Alert, Container, Form, Button } from 'react-bootstrap';
import {useState} from 'react'
interface RegisterProps {
    
}
 
const Register: React.FC<RegisterProps> = () => {

	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    async function handleSubmit(event: React.FormEvent) {
		event.preventDefault()

        const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

	}

    return (<Container>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Register</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              <Button disabled={loading} type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      
      </Container>  );
}
 
export default Register;