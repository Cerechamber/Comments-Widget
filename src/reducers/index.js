
const tasks = (state, action) => {

  switch (action.type) {
    case 'COMMENT_DELETE':
   const indexx = state.findIndex(item => {
      return item.date == action.payload
    });
    const newstate = state.slice();
    newstate.splice(indexx, 1);
    return newstate;
 
    

    case 'COMMENT_ADD':    
      return [
      ...state, action.payload
      ];

      case 'SET_STATE':
      return action.payload;


      default:
     return state;
  }
    
}

export default tasks;

