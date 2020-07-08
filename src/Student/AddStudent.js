import React from 'react';
import axios from 'axios';
import '../Student/AddStudent.css';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddStudent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: '',
      RollNo:'',
      Class:'',
      Address:''
    }
  }

  AddStudent = () => {
    axios
      .post("http://localhost:52564/Api/Student/AddotrUpdatestudent/", {
        Name: this.state.Name,
        RollNo: this.state.RollNo,
        Class: this.state.Class,
        Address: this.state.Address,
      })
      .then((json) => {
        if (json.data.Status === "Success") {
          console.log(json.data.Status);
          alert("Data Saved Successfully");
          this.props.history.push("/StudentList");
        } else {
          alert("Data Not Saved");
          this.props.history.push("/StudentList");
        }
      });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    return (
      <Container fluid className="App">
        <h4 className="pageHeading">Enter student information.</h4>
        <Form className="form">
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Name"
                  onChange={this.handleChange}
                  value={this.state.Name}
                  placeholder="Enter Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="rollno" sm={2}>
                RollNo
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="RollNo"
                  onChange={this.handleChange}
                  value={this.state.RollNo}
                  placeholder="Enter Roll No"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="class" sm={2}>
                Class
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Class"
                  onChange={this.handleChange}
                  value={this.state.Class}
                  placeholder="Enter Class"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm={2}>
                Address
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Address"
                  onChange={this.handleChange}
                  value={this.state.Address}
                  placeholder="Enter Address"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <button
                  type="button"
                  onClick={this.AddStudent}
                  className="btn btn-success"
                >
                  Submit
                </button>
              </Col>
              <Col sm={1}>
                <Button
                  color="danger"
                >
                  Cancel
                </Button>{' '}
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default AddStudent;
