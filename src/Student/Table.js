import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Table extends Component {

  DeleteStudent = () => {
    axios.delete(
      "http://localhost:52564/Api/Student/Deletestudent?id=" + this.props.obj.Id
    )
    .then(json => {
      if (json.data.Status === "Delete") {
        alert('Record Deleted Successfully');
      }
    })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.Name}</td>
        <td>{this.props.obj.RollNo}</td>
        <td>{this.props.obj.Class}</td>
        <td>{this.props.obj.Address}</td>
        <td>
          <button>
            <Link to={"/edit/" + this.props.obj.Id}>
              Edit
            </Link>
          </button>
        </td>
        <td>
          <button type="button" onClick={this.DeleteStudent}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Table;
