import React, {useState, useEffect} from 'react';
import {Card, Accordion} from 'react-bootstrap'
import {connect, useSelector, useDispatch} from 'react-redux'
import * as action from '../actionCreators'
import Project from '../components/Project'

function Dashboard(props){

    useEffect(()=>{
        fetch("http://localhost:3000/projects")
        .then(resp=>resp.json())
        .then(projects=> props.fetchProjects(projects))
    }, [props])

    return(
        <div>
            <h1>USER DASHBOARD</h1>
            <div class="accordion" id="accordionExample">
                {props.projects.map((project, i) =><Project project={project} key={i}/>)}
            </div>
            
        </div>
    )
}

const msp=(state)=>{
    return {
        projects: state.projects,
    }
}
const mdp=(dispatch)=>{
    return {
        fetchProjects: (projects)=>dispatch(action.fetchProjects(projects)),
    }
}

export default connect(msp, mdp)(Dashboard)