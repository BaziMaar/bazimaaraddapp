import { useState } from 'react'
import Home from './component/Home'
import Hack from './component/Hack'
import Result from './component/Result'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import vipHack from './component/vipHack';
import Signup from './component/SignUp';
import UpiPayment from './component/UpiPayment';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Main />} />
          <Route path="/result" element={<Result />} />
          <Route path="/hack" element={<Hack />} />
          <Route path="/vip" Component={vipHack } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/paymentUpi" element={<UpiPayment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
