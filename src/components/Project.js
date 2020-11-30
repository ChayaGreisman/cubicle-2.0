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
                <Card.Body>
                    <h1>{props.project.name}</h1>

                    {props.project.tasks.map(task=><h3>{task.name}</h3>)}

                    {props.members.map((member) =>
                    <div>
                        <img src={member.image_url} alt={member.name} className='member-image'/>
                        <h4>{member.name} - {member.role}</h4>
                    </div>

                    )}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );

}

export default Project