import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="taskInput">
              <Form.Label>Add a Task:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={addTask}>
              Add Task
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Task List</h2>
          <ListGroup>
            {tasks.map((t, index) => (
              <ListGroup.Item key={index}>
                {t}
                <Button
                  variant="danger"
                  size="sm"
                  className="float-right"
                  onClick={() => removeTask(index)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoApp;
