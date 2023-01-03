import { Routes,Route,Link,NavLink } from 'react-router-dom';
import './App.css';
import About from './Page/About';
import Contact from './Page/Blog/Contact';
import Home from './Page/Home';
import ContactLayout from './Page/Blog/ContactLayout';
import Admin from './Page/Blog/Admin';
import Mail from './Page/Blog/Mail';
import Page404 from './Page/Page404';
function App() {
  return (
    <>
<nav>
  <NavLink to='/'>Home</NavLink>
  <NavLink to='/about'>about</NavLink>
  <NavLink to='/contact'>contact</NavLink>
</nav>
      <Routes>
        <Route path='/'  index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactLayout/>}>
        <Route index={true} element={<Contact/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='mail/:url' element={<Mail/>}/>
          </Route>
          <Route path='*' element={<Page404/>}/>
      </Routes>
    </>
  );
}

export default App;
