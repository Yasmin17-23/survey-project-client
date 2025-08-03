import { Helmet } from "react-helmet"
import Banner from "../../components/Banner/Banner"
import LatestSurvey from "../../components/Home/LatestSurvey/LatestSurvey"
import WorkSurvey from "../../components/Home/WorkSurvey/WorkSurvey"
import Faq from "../../components/Home/Faq/Faq"


const  Home = () => {
  return (
    <div>
      <Helmet>
         <title>SurveyBangla || Feedback Made Easy</title>
      </Helmet>
       <Banner/>
       <LatestSurvey/>
       <WorkSurvey/>
       <Faq/>
    </div>
  )
}

export default  Home