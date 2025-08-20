import { Outlet } from "react-router"
import Sidebar from "../components/Dashboard/Sidebar/Sidebar"


const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen md:flex'>
       {/* Sidebar */}
       <Sidebar/>

       {/*Outlet -- Dynamic content */}
       <div className="flex-1 md:ml-72">
        <div className="p-10">
             <Outlet/>
        </div>
       </div>
    </div>
  )
}

export default DashboardLayout