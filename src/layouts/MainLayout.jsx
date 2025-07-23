
import { Outlet } from 'react-router'
import Navbar from '../components/Shared/Navbar/Navbar'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
       <div className='pt-24 mx-auto max-w-7xl xl:px-16 md:px-10 sm:px-2 px-4'>
        <Outlet />
       </div>
    </div>
  )
}

export default MainLayout