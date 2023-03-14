import Home from "./pages/Home/Home"
import { Link, Outlet } from 'react-router-dom'
function App() {
  return (
    <div>
      <Link to={'/'}>
        <h1>Titulo legal</h1>
      </Link>

      <Outlet />
    </div >
  )
}

export default App
