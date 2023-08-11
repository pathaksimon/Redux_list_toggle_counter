import {Action} from 'redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const CLICKED = 'CLICKED'
const NAME_CHANGED = 'NAMECHANGED'
const SUBMIT_BUTTON = 'SUBMITBUTTON'

export function increment() {
  return {
    type: INCREMENT,
  }
}

export function decrement() {
  return {
    type: DECREMENT,
  }
}

export function clicked() {
  return {
    type: CLICKED,
  }
}

export function namechanged(name1) {
  console.log('yes')
  return {
    type: name1.type,
    payload: name1.payload,
  }
}

export function sambit(name2) {
  return {
    type: name2.type,
    payload: name2.next1,
  }
}
