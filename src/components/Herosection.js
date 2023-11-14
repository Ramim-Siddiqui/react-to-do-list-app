import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
export default function Herosection()
{
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
    return(
        <div className="container">
            <div className="row justify-content-center text-right" style={textbox}>
                <div className="col-md-12 col-sm-12">
                <Form>
                     <Form.Group controlId="taskInput">
                        <span>Enter The Task To Do</span>
                        <Form.Control type="text" placeholder="Enter text" value={task} onChange={(e) => setTask(e.target.value)}/>
                    </Form.Group>
                     <br/>
                    <Button variant="success"onClick={addTask}>Add Task</Button>{' '}
                </Form>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <ListGroup>
                        {tasks.map((t, index) => (
                            <ListGroup.Item key={index}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>{t}</span>
                                    <Button variant="danger" size="md" onClick={() => removeTask(index)}>
                                        Remove
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div>
    );
}
const textbox = {
    padding: '20px', 
    fontWeight: 'bold',
    fontSize: '20px',
    fontFamily: 'Georgia'
  };
  