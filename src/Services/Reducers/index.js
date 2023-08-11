const initialState = {
  count: 0,
  clicked: false,
  newList: [],
  name: '',
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1}
    case 'DECREMENT':
      return {...state, count: state.count - 1}
    case 'CLICKED':
      return {...state, clicked: !state.clicked}
    case 'NAME_CHANGED':
      return {...state, name: action.payload}
    case 'SUBMITBUTTON':
      return {
        ...state,
        newList: [...state.newList, {name: action.payload}],
      }
    default:
      return state
  }
}

export default counterReducer
