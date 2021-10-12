export default function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return addProduct(state, action);
    // case "EDIT_PRODUCT":
    //   return editProduct(state, action);
    case "SET_PRODUCTS":
        return setProducts(state,action)
    case 'SET_CATEGORIES':
        return setCategories(state,action)
    default:
        throw new Error('no action type found')
  }

  function addProduct(state, action){
      const {payload}=action
      if(payload!==null) return[...state,payload]
      return state
  }
  function setProducts(state,action){
      const {payload} = action 
      if(payload!==null) return payload
      return state
  }
  function setCategories(state,action){
    const {payload} = action 
    if(payload!==null) return payload
    return state
}
}
