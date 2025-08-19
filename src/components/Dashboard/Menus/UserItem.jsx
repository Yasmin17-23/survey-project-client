import { MdReport } from "react-icons/md"
import LinkItem from "./LinkItem"
import { MdHowToVote } from "react-icons/md";
import { LiaComments } from "react-icons/lia";



const UserItem = () => {
  return (
    <div>
         <LinkItem label='Participated Surveys' address='user/surveys' icon={MdHowToVote} />
         <LinkItem label='Reported Survey' address='user/my-reports' icon={MdReport} />
         <LinkItem label='User Comments' address='user/comments' icon={LiaComments} />
    </div>
  )
}

export default UserItem