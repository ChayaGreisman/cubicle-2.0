import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap'

function Project(props){
    return( 
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={props.num.toString()}>
                {props.project.name} - {props.project.deadline}
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.num.toString()}>
            <Card.Body>{props.project.name}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );

}

export default Project