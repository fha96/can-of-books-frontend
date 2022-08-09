import { Component } from "react";
import Table from 'react-bootstrap/Table';
class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
       <Table striped bordered hover>
      <thead>
        <tr>
          Developer Information
        </tr>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Links to reach me</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fahad</td>
          <td>Rimawe</td>
          <td><a href="https://www.linkedin.com/in/fahad-rimawe-9832a9172/">linkedIn</a></td>
        </tr>
      </tbody>
    </Table>
      </>
    )
  }
};

export default Profile;
