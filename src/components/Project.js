import React from 'react';
import {Accordion, Card} from 'react-bootstrap'

function Project(props){
    return(
        <div>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={props.key}>
                {props.project.name} - {props.project.deadline}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.key}>
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </div>
        
    );

}

export default Project