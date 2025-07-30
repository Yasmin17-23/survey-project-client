import { Helmet } from "react-helmet"
import Banner from "../../components/Banner/Banner"


const  Home = () => {
  return (
    <div>
      <Helmet>
         <title>SurveyBangla || Feedback Made Easy</title>
      </Helmet>
       <Banner/>
    </div>
  )
}

export default  Home