import { useState } from 'react'
import ClassComponentExample from './component/ClassComponentExample'
import ListExample from './component/ListExample'
import PropsExample from './component/PropsExample'
import StateExample from './component/StateExample'
import FormExample from './component/FormExample'
import JSX from './component/JSX'
import LifecycleExample from './component/LifecycleExample'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClassComponentExample/>
      <hr />
      <StateExample />
      <hr />
      <ListExample />
      <hr />
      <PropsExample />
      <hr />
      <FormExample />
      <hr />
      <JSX />
      <hr />
      <LifecycleExample />
    </>
  )
}

export default App
