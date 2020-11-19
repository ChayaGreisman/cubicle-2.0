const initialState = {
    projects: [],
 }
  
 const reducer = (prevState=initialState, action) => {
    switch(action.type) {
        case 'FETCH_PROJECTS':
            return {...prevState, projects: action.payload.value};
        
        default:
            return prevState
    }
 }
  
 export default reducer