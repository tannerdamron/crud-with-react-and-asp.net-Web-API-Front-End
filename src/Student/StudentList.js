import React, { Component } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import Table from "./Table";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {business: []};
  }

  componentDidMount() {
    axios.get('http://localhost:52564/Api/Student/Studentdetails')
    .then(response => {
      this.setState({ business: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  tabRow(){
    return this.state.business.map(function(object, i) {
      return <Table obj={object} key={i} />;
    });
  }

  render() {
    return (
      <Container fluid>
        <div>
          <h4 align="center">Student List</h4>
          <table
            width="80%"
            align="center"
            className="table table-striped"
            style={{ marginTop: 10 }}
          >
            <thead>
              <tr align="left">
                <th>Name</th>
                <th>RollNo</th>
                <th>Class</th>
                <th>Address</th>
                <th colSpan="4">Action</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </div>
      </Container>
    );
  }
}

export default StudentList;
