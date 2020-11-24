import React from 'react';
import {Accordion, Card} from 'react-bootstrap'

function Project(props){
    return(      
       <div>{props.project.name} - {props.project.deadline}</div>
    );

}

export default Project