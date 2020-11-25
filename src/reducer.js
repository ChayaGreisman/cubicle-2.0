const initialState = {
    projects: [],
    members: []
 }
  
 const reducer = (prevState=initialState, action) => {
    switch(action.type) {
        case 'FETCH_PROJECTS':
            return {...prevState, projects: action.payload.value};
        case 'FETCH_MEMBERS':
            return {...prevState, members: action.payload.value};
        default:
            return prevState
    }
 }
  
 export default reducer