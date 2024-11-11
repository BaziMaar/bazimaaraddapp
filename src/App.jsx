import { useState } from 'react'
import Home from './component/Home'
import Hack from './component/Hack'
import Result from './component/Result'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './component/Main';
import vipHack from './component/vipHack';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" exact Component={Home}></Route>
        <Route path="/" exact Component={Main}></Route>
        <Route path="/result" exact Component={Result}></Route>
        <Route path="/hack" exact Component={Hack}></Route>
        <Route path='/vip' exact Component={vipHack}></Route>
      </Routes>
    </Router>
      {/* <Home/> */}
      {/* <Hack /> */}
      {/* <Result /> */}
    </>
  )
}

export default App
