import LinkItem from "./LinkItem";
import { FaUsers } from "react-icons/fa6";


const AdminItem = () => {
  return (
     <>
      <LinkItem label='Manage Users' address='admin/users' icon={FaUsers} />
     </>
  )
}

export default AdminItem