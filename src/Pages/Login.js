import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import swal from 'sweetalert';
function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  function logClick() {

 axios
  .post('http://localhost:1337/api/auth/local', {
    identifier:identifier,
    password
  })
  .then((response) => {
    // Handle success.
   // swal("oppps!",JSON.stringify(error.message), "success");
   swal("Good Result!",JSON.stringify(response.data), "success");
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch((error) => {
    // Handle error.
    swal("oppps!",JSON.stringify(error.message), "success");
    console.log('An error occurred:', error.response);
  });
 
  }
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h1>Login Page</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="identifier"
                value={identifier}
                onChange={(e)=>{setIdentifier(e.target.value)}}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name=" password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </Form.Group>

            <Button variant="primary" type="button" onClick={()=>logClick()}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
