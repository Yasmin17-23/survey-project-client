import { MdPostAdd } from "react-icons/md"
import LinkItem from "./LinkItem"
import { BsFileEarmarkPlusFill } from "react-icons/bs"
import { LiaClipboardListSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";


const SurveyorItem = () => {
  return (
    <>
     <LinkItem label='Create Survey' address='create-survey' icon={MdPostAdd} />
     <LinkItem label='My Survey List' address='mysurvey-lists' icon={LiaClipboardListSolid}/>
     <LinkItem label='Responses Surveys' address='surveyor/surveys' icon={BsFileEarmarkPlusFill}/>
     <LinkItem label="Feedback Surveys" address="surveyor/feedback" icon={VscFeedback} />
    </>
  )
}

export default SurveyorItem