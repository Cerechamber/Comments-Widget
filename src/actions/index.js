

export const commentDelete = (date) => {
   return {
    type: 'COMMENT_DELETE',
    payload: date
   }
    
  }

  export const commentAdd = (newcomment) => {
    return {
      type: 'COMMENT_ADD',
      payload: newcomment
    }
  }

export const setStateFromStorage = (loaded) => {
  return {
    type: 'SET_STATE',
    payload: loaded
  }
}




