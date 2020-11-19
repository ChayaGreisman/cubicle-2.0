import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import * as action from '../actionCreators'

const Dashboard = (props) => {

    useEffect(()=>{
        fetch("http://localhost:3000/projects")
        .then(resp=>resp.json())
        .then(projects=> props.fetchProjects(projects))
    }, [props])

    return(
        <div >
            <h1>USER DASHBOARD</h1>
            {props.projects.map(project=><h3>{project.name}</h3>)}
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