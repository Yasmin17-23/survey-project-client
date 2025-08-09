import { MdPostAdd } from "react-icons/md"
import LinkItem from "./LinkItem"


const UserItem = () => {
  return (
    <div>
         <LinkItem label='Reported Survey' address='user/my-reports' icon={MdPostAdd} />
    </div>
  )
}

export default UserItem