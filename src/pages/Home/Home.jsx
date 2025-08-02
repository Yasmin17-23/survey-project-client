import { Helmet } from "react-helmet"
import Banner from "../../components/Banner/Banner"
import LatestSurvey from "../../components/Home/LatestSurvey/LatestSurvey"


const  Home = () => {
  return (
    <div>
      <Helmet>
         <title>SurveyBangla || Feedback Made Easy</title>
      </Helmet>
       <Banner/>
       <LatestSurvey/>
    </div>
  )
}

export default  Home