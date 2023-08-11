import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import store from '../../containers/store'
import {namechanged, sambit} from '../../Services/Actions/action'

console.log(namechanged)
const ClickCounter = () => {
  const count = useSelector(state => state.count)
  const news = useSelector(state => state.clicked)
  const news1 = useSelector(state => state.name)
  const news2 = useSelector(state => state.newList)
  console.log(news2)
  const dispatch = useDispatch()

  console.log(store.getState())

  const [newest, setNew] = useState('')

  const increment = () => {
    store.dispatch({type: 'INCREMENT'})
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'})
  }

  const clicked = () => {
    dispatch({type: 'CLICKED'})
  }

  const nameChange = event => {
    const sami = event.target.value
    setNew(sami)
  }

  const count1 = () => {
    let bhil = ''
    if (count > 1) {
      bhil = 'alpha'
    } else if (count < 1) {
      bhil = 'beta'
    }
    return bhil
  }

  const max = () => {
    if (news) {
      return 'clicked'
    }
    return 'not clicked'
  }

  const submitting = event => {
    event.preventDefault()
    dispatch(sambit({type: 'SUBMITBUTTON', next1: newest}))
    setNew('')
  }

  return (
    <form onSubmit={submitting}>
      <h2 className={count1()}>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={clicked}>{max()}</button>
      <input value={newest} onChange={nameChange} />
      <button type="submit">Add button</button>
      <ul>
        {news2.map(each => (
          <li>{each.name}</li>
        ))}
      </ul>
    </form>
  )
}

export default ClickCounter
