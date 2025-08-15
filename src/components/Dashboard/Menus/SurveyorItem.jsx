import { MdPostAdd } from "react-icons/md"
import LinkItem from "./LinkItem"
import { BsFileEarmarkPlusFill } from "react-icons/bs"


const SurveyorItem = () => {
  return (
    <>
     <LinkItem label='Create Survey' address='create-survey' icon={MdPostAdd} />
     <LinkItem label='Responses Surveys' address='surveyor/surveys' icon={BsFileEarmarkPlusFill}/>
    </>
  )
}

export default SurveyorItem