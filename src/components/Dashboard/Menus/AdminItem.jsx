import LinkItem from "./LinkItem";
import { FaUsers } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FcSurvey } from "react-icons/fc";


const AdminItem = () => {
  return (
     <>
      <LinkItem label='Manage Users' address='admin/users' icon={FaUsers} />
      <LinkItem label='Manage Payments' address='admin/payments' icon={RiSecurePaymentFill} />
      <LinkItem label='Manage Surveys' address='admin/surveys' icon={FcSurvey} />
     </>
  )
}

export default AdminItem