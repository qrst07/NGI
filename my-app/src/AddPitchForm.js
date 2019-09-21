import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


class AddPitchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          buttonClicked: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        alert("The pitch information was submitted to the database");
        event.preventDefault();
        this.setState = { buttonClicked: true}
      }
    
      render() {
        return (
            <Form className="formClass">
                <h1>PITCH YOUR PITCH!</h1>
                {/* <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row> */}

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Pitch Name</Form.Label>
                    <Form.Control placeholder="Name of your pitch" />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Pitch Location</Form.Label>
                    <Form.Control placeholder="Where are you located?" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Describe your Pitch:</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>How many people are you looking for?</Form.Label>
                    <Form.Control placeholder="1" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>How much funding are you looking for?</Form.Label>
                    <Form.Control as="select">
                    <option>$100-$500</option>
                    <option>$500-$1000</option>
                    <option>$1000-$2000</option>
                    <option>$2000+</option>
                    </Form.Control>
                </Form.Group>

                
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Which Sustainable Goal(s) are you working towards?</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => this.handleSubmit()}>
                    Submit
                </Button>
            </Form>
            
        );
      }
  }

export default AddPitchForm;
