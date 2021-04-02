const INITIAL_STATE = {
  name: null,
  open: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_MODAL_OPEN':
      return { ...state, open: action.payload }
    case 'SET_MODAL_NAME':
      return { ...state, name: action.payload }
    default:
      return state
  }
}
