import { MdReport } from "react-icons/md"
import LinkItem from "./LinkItem"
import { MdHowToVote } from "react-icons/md";



const UserItem = () => {
  return (
    <div>
         <LinkItem label='Reported Survey' address='user/my-reports' icon={MdReport} />
         <LinkItem label='Participated Surveys' address='user/surveys' icon={MdHowToVote} />
    </div>
  )
}

export default UserItem