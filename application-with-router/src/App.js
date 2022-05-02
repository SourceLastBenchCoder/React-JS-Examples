import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import PageNotFound from './components/404'

function App () {
  return <Router>
    <h1>Welcome to React Router Example</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About US</Link></li>
      <li><Link to="/contact">Contact US</Link></li>
    </ul>

<Routes>
  <Route exact path='/' element={<Home/>}></Route>
  <Route path='/about' element={<AboutUs/>}></Route>
  <Route path='/contact' element={<ContactUs/>}></Route>
  <Route path='*' element={<PageNotFound/>}></Route>
</Routes>
  </Router>
}

export default App
