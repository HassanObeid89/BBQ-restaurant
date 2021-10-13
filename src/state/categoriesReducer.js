export default function productReducer(state, action) {
    switch (action.type) {
      case "ADD_CATEGORY":
        return addCategory(state, action);
      case 'SET_CATEGORIES':
          return setCategories(state,action)
      default:
          throw new Error('no action type found')
    }
  
    function addCategory(state, action){
        const {payload}=action
        if(payload!==null) return[...state,payload]
        return state
    }
    function setCategories(state,action){
      const {payload} = action 
      if(payload!==null) return payload
      return state
  }
  }
  