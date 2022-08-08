import React from "react";
import Login from './Login';
import Logout from './Logout';
import Card from 'react-bootstrap/Card';

export default class AuthButtons extends React.Component {



    render() {

        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Login />
                        <Logout />
                    </Card.Body>
                </Card>


            </>
        )
    }
}