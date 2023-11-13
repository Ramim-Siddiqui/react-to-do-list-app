import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Herosection()
{
    return(
        <div className="container">
            <div className="row justify-content-center text-right" style={textbox}>
                <div className="col-md-12 col-sm-12">
                <span>Enter the task to do</span>
                <Form.Control type="text" placeholder="Normal text" />
                <br/>
                <Button variant="success">Add Task</Button>{' '}
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-md-12 col-sm-12">
                
                </div>
            </div>
        </div>
    );
}
const textbox = {
    padding: '20px', 
    fontWeight: 'bold',
    fontSize: '20px'
  };