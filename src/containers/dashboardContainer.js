import React from 'react';
import {connect} from 'react-redux'

const Dashboard = (props) => {
    return(
        <div >
            <h1>USER DASHBOARD</h1>
        </div>
    )
}

const msp=(state)=>{
    return {projects: state.projects}
}

export default connect(msp)(Dashboard)