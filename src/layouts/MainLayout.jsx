
import { Outlet } from 'react-router'
import Navbar from '../components/Shared/Navbar/Navbar'

const MainLayout = () => {
  return (
    <div>
        <Navbar />
       <div>
        <Outlet />
       </div>
    </div>
  )
}

export default MainLayout