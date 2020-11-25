let fetchProjects = (projects) => ({type:'FETCH_PROJECTS', payload: {value: projects}})
let fetchMembers = (members) => ({type:'FETCH_MEMBERS', payload: {value: members}})

export {
    fetchProjects,
    fetchMembers
}