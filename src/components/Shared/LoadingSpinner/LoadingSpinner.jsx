import PropTypes from 'prop-types'
import { RingLoader } from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
  return (
     <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <RingLoader size={70} color="red" />
    </div>
  )
}

LoadingSpinner.propTypes = {
    smallHeight: PropTypes.bool,
}

export default LoadingSpinner