import { useState } from 'react'
import Home from './component/Home'
import Hack from './component/Hack'
import Result from './component/Result'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './component/Main';
import vipHack from './component/vipHack';
import Signup from './component/SignUp';
import UpiPayment from './component/UpiPayment';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/home"  Component={Home}></Route>
        <Route path="/"  Component={Main}></Route>
        <Route path="/result"  Component={Result}></Route>
        <Route path="/hack" element={<Hack/>}></Route>
        <Route path='/vip'  Component={vipHack}></Route>
        <Route path='/signup'  Component={Signup}></Route>
        <Route path="/paymentUpi"  Component={UpiPayment}></Route>
      </Routes>
    </Router>
      {/* <Home/> */}
      {/* <Hack /> */}
      {/* <Result /> */}
    </>
  )
}

export default App
