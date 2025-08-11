import PropTypes from "prop-types";

const ParticipatedDataRow = ({ survey, index}) => {

    const showVote = () => {
        return survey?.voteRecord?.map((voteItem, idx) => {
            const voteValue = voteItem.vote;
            return (<span key={idx} className={`inline-block px-2 py-0.5 mr-1 rounded text-xs
                 font-semibold ${voteValue === 'yes' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600' }`}>{voteValue.toUpperCase()}</span>)
       })
    }
  return (
      <tr>
           <td>{index + 1}</td>
           <td>{survey?.title}</td>
           <td>{survey?.questionTitle}</td>
           <td>{showVote()}</td>
           
         </tr>
  )
}

ParticipatedDataRow.propTypes = {
    survey: PropTypes.object,
    index: PropTypes.number,
}

export default ParticipatedDataRow