
import './App.css'
import login from './pages/authentication/Login'
import signup from './pages/authentication/Signup'
import Home from './pages/home/Home'
function App() {
  return (
    <>
     <div className='bg-red-600'>Anand</div>
     <button className="btn btn-accent">Accent</button>
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" exact element={<About/>}/>
     </Routes>
    </>
  )
}

export default App
