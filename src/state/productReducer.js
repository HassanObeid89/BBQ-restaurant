export default function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return addProduct(state, action);
    case "SET_PRODUCTS":
      return setProducts(state, action);
    case "UPDATE_PRODUCT":
      return updateProduct(state, action);
    case "DELETE_PRODUCT":
      return deleteProduct(state, action)
    default:
      throw new Error("no action type found");
  }

  function addProduct(state, action) {
    const { payload } = action;
    if (payload !== null) return [...state, payload];
    return state;
  }
  function setProducts(state, action) {
    const { payload } = action;
    if (payload !== null) return payload;
    return state;
  }
  function updateProduct(state, action) {
    const { payload } = action;
    const newState = [...state];
    const index = newState.findIndex((item) => item.id === payload.id);
  
    newState[index] = { ...payload };
    return newState;
  }
  function deleteProduct(state, action){
    const { payload } = action;
    const newState = [...state];
    const index = newState.findIndex((item) => item.id === payload.id);
  
    newState[index] = { ...payload };
    return newState;
  }
}
