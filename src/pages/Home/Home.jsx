import { Helmet } from "react-helmet"
import Banner from "../../components/Banner/Banner"
import LatestSurvey from "../../components/Home/LatestSurvey/LatestSurvey"
import WorkSurvey from "../../components/Home/WorkSurvey/WorkSurvey"
import Faq from "../../components/Home/Faq/Faq"
import FeaturedSurvey from "../../components/Home/FeaturedSurvey/FeaturedSurvey"


const  Home = () => {
  return (
    <div className="px-5">
      <Helmet>
         <title>SurveyBangla || Feedback Made Easy</title>
      </Helmet>
       <Banner/>
       <FeaturedSurvey/>
       <LatestSurvey/>
       <WorkSurvey/>
      <div className="px-5">
         <Faq/>
      </div>
    </div>
  )
}

export default  Home